import React from "react";

import Wrapped from "./PostCard.styled";

const PostCard = ({ post, comments }) => {
    const lastIndex = comments.length - 1;

    console.log(comments);
    return (
        <Wrapped className="row">
            <div className="title-author column">
                <h2 className="title">{post.title}</h2>
                <h2 className="author">{post.author.name}</h2>
            </div>
            <div className="last-message column">
                {comments.length > 0 ? (
                    <h2>
                        {comments[lastIndex].updatedAt} <br />
                        from {comments[lastIndex].author.name}
                    </h2>
                ) : (
                    <h2>No comments</h2>
                )}
            </div>
            <div className="comments row">
                <h2 className="comments-num center-text">{comments.length}</h2>
            </div>
        </Wrapped>
    );
};

export default PostCard;
