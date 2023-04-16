import React from "react";
import { useNavigate } from "react-router-dom";

import Wrapped from "./PostCard.styled";

import { usePostContext } from "../../context/post.context";
import { useCommentsContext } from "../../context/comments.context";

const PostCard = ({ post, comments }) => {
    const navigate = useNavigate();

    const { setPost, lastCommentDate } = usePostContext();
    const { setComments } = useCommentsContext();

    const postClick = () => {
        setPost(post);
        setComments(post.comments);
        localStorage.setItem("post", JSON.stringify(post));
        navigate(`/posts/${post._id.slice(-6)}`);
    };

    return (
        <Wrapped className="row">
            <div className="title-author column">
                <h2 className="title" onClick={postClick}>
                    {post.title}
                </h2>
                <h2 className="author">{post.author.name}</h2>
            </div>
            <div className="last-message column">
                {post.comments.length > 0 ? (
                    <h2>
                        {lastCommentDate(post)} <br />
                        from {post.comments[comments.length - 1].author.name}
                    </h2>
                ) : (
                    <h2>No messages</h2>
                )}
            </div>
            <div className="comments row">
                <h2 className="comments-num center-text">
                    {post.comments.length}
                </h2>
            </div>
        </Wrapped>
    );
};

export default PostCard;
