import { useState, createContext, useContext } from "react";

import dbApi from "../services/api/db.api";

export const PostContext = createContext();

const PostProvider = ({ children }) => {
    const [post, setPost] = useState(
        JSON.parse(localStorage.getItem("post")) || []
    );

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

    return (
        <PostContext.Provider
            value={{
                post,
                setPost,
                postPublicDate,
                lastCommentDate,
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
