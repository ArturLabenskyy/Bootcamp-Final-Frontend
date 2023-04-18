import { useState, createContext, useContext } from "react";

import dbApi from "../services/api/db.api";

import { useGamesContext } from "./games.context";

export const PostContext = createContext();

const PostProvider = ({ children }) => {
    const { setPosts } = useGamesContext();
    const [post, setPost] = useState([]);

    const postPublicDate = (post) => {
        let date = post.createdAt.replace("T", " ");
        return date.slice(0, -5);
    };

    const lastCommentDate = (post) => {
        if (post.comments.length > 0) {
            const lastIndex = post.comments.length - 1;
            return post.comments[lastIndex].createdAt.replace("T", " ");
        } else {
            return Date.now();
        }
    };

    const getCategoryPosts = async () => {
        try {
            const category = JSON.parse(localStorage.getItem("category"));
            // console.log("fetch started for category:", category);
            const res = await dbApi.get(`posts/category/${category}`);
            if (res && res !== []) {
                setPosts(res.data);
                // return [];
                // return res.data;
            } else {
                setPosts([]);
                // console.log("res", res);
                // return res;
            }
        } catch (error) {
            console.log(error);
        }
    };

    const createPost = async (post) => {
        try {
            const res = await dbApi.post("posts/", post);
            if (res) {
                const newPosts = await getCategoryPosts();
                if (newPosts) {
                    return newPosts;
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <PostContext.Provider
            value={{
                post,
                setPost,
                postPublicDate,
                lastCommentDate,
                createPost,
                getCategoryPosts,
            }}
        >
            {" "}
            {children}{" "}
        </PostContext.Provider>
    );
};

export const usePostContext = () => {
    return useContext(PostContext);
};

export { PostProvider };
