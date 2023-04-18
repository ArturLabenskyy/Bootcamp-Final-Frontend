import React, { useState, useEffect, useRef } from "react";

import Wrapped from "./CommentForm.styled";

import { useCommentsContext } from "../../context/comments.context";

const CommentForm = ({ handleClose, show, setFetching }) => {
    const [commentText, setCommentText] = useState("");
    const inputRef = useRef(null);

    const { createComment, updatePostComments } = useCommentsContext();

    useEffect(() => {
        if (show && inputRef.current) {
            inputRef.current.focus();
        }
    }, [show]);

    const publicComment = async () => {
        let post = JSON.parse(localStorage.getItem("post"));
        const userId = JSON.parse(localStorage.getItem("userId"));

        const newComment = {
            text: commentText,
            author: userId,
            post: post._id,
        };

        setFetching(true);
        const res = await createComment(newComment);
        if (res) {
            setCommentText("");
            console.log("updated started!");

            await updatePostComments(post._id);
            handleClose();
            setFetching(false);
        }
    };

    return (
        <Wrapped show={show}>
            <div className="webflow-style-input">
                <input
                    type="email"
                    placeholder="Your comment"
                    ref={inputRef}
                    onChange={(e) => setCommentText(e.target.value)}
                ></input>
                <button className="comment-button" onClick={publicComment}>
                    Comment
                </button>
            </div>
        </Wrapped>
    );
};

export default CommentForm;
