import { useState, createContext, useContext } from "react";

import dbApi from "../services/api/db.api";

export const CommentsContext = createContext();

const CommentsProvider = ({ children }) => {
    const [allComments, setComments] = useState([]);

    const getPostComments = async (postId) => {
        try {
            const res = await dbApi.get(`comments/post/${postId}`);
            if (res) {
                setComments(res.data);
            }
        } catch (error) {
            console.log(error);
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
                getPostComments,
                getCommentAuthor,
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
