import React from "react";
// import { useCommentsContext } from "../../context/comments.context";

import Wrapped from "./Comment.styled";

const Comment = ({ comment }) => {
    return (
        <Wrapped>
            <div className="author-date row">
                <h1 className="comment-author">{comment.author.name}</h1>
                <h3 className="comment-date">{comment.createdAt}</h3>
            </div>
            <div className="comment-content">
                <h2>{comment.text}</h2>
            </div>
        </Wrapped>
    );
};

export default Comment;
