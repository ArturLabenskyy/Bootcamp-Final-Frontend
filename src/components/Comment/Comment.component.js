import React from "react";
import { useCommentsContext } from "../../context/comments.context";

import Wrapped from "./Comment.styled";

const Comment = ({ comment, setFetching }) => {
    const userId = JSON.parse(localStorage.getItem("userId"));
    const post = JSON.parse(localStorage.getItem("post"));

    const { deleteComment, updatePostComments } = useCommentsContext();

    const deleteClick = async () => {
        setFetching(true);
        await deleteComment(comment._id);
        updatePostComments(post._id);
        setFetching(false);
    };

    return (
        <Wrapped>
            <div className="author-date row">
                <h1 className="comment-author">{comment.author.name}</h1>
                <h3 className="comment-date">{comment.createdAt}</h3>
                <h1>Actions</h1>
            </div>
            <div className="comment-content row">
                <h2>{comment.text}</h2>
                <div className="editing center-text">
                    {comment.author._id === userId && (
                        <button
                            className="delete-button "
                            onClick={deleteClick}
                        >
                            Delete
                        </button>
                    )}
                </div>
            </div>
        </Wrapped>
    );
};

export default Comment;
