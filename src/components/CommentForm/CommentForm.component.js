import React, { useState, useEffect, useRef } from "react";

import Wrapped from "./CommentForm.styled";

import { useCommentsContext } from "../../context/comments.context";
import { usePostContext } from "../../context/post.context";

import dbApi from "../../services/api/db.api";
const CommentForm = ({ handleClose, show, setFetching }) => {
    const [commentText, setCommentText] = useState("");
    const inputRef = useRef(null);

    const { setComments, createComment } = useCommentsContext();

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
            post.comments.push(newComment);
            console.log(post.comments);
            localStorage.setItem("post", JSON.stringify(post));
            console.log(post.comments);
            setComments(post.comments);

            setFetching(false);
            setCommentText("");
            handleClose();
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
