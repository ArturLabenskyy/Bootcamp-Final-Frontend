import { useState, createContext, useContext } from "react";

import dbApi from "../services/api/db.api";

export const CommentsContext = createContext();

const CommentsProvider = ({ children }) => {
    const [allComments, setComments] = useState([]);

    const updatePostComments = async (postId) => {
        try {
            const res = await dbApi.get(`comments/post/${postId}`);
            if (res) {
                setComments(res.data);
                return;
            }
        } catch (error) {
            console.log(error);
        }
    };

    const createComment = async (comment) => {
        try {
            const res = dbApi.post(`comments`, comment);
            return res;
        } catch (error) {
            console.log(error);
        }
    };

    const commentPublicDate = (comment) => {
        if (comment) {
            let date = comment.createdAt.replace("T", " ");
            return date.slice(0, -5);
        } else {
            return "";
        }
    };

    const getCommentAuthor = async (commentId) => {
        try {
            const res = await dbApi.get(`comments/`, {
                params: {
                    id: commentId,
                },
            });
            if (res) {
                console.log(res);
                return res.data.author.name;
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <CommentsContext.Provider
            value={{
                allComments,
                setComments,
                getCommentAuthor,
                createComment,
                commentPublicDate,
                updatePostComments,
            }}
        >
            {" "}
            {children}{" "}
        </CommentsContext.Provider>
    );
};

export const useCommentsContext = () => {
    return useContext(CommentsContext);
};

export { CommentsProvider };
