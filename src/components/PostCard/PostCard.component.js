import React from "react";
import { useNavigate } from "react-router-dom";

import Wrapped from "./PostCard.styled";

import { usePostContext } from "../../context/post.context";
import { useCommentsContext } from "../../context/comments.context";

import dbApi from "../../services/api/db.api";

const PostCard = ({ post, comments, setFetching, setPosts }) => {
    const navigate = useNavigate();

    const { setPost, lastCommentDate, getCategoryPosts } = usePostContext();
    const { setComments } = useCommentsContext();

    const userId = JSON.parse(localStorage.getItem("userId"));

    const postClick = () => {
        setPost(post);
        setComments(post.comments);
        localStorage.setItem("post", JSON.stringify(post));
        navigate(`/posts/${post._id.slice(-6)}`);
    };

    const deletePost = async () => {
        try {
            setFetching(true);
            const res = await dbApi.delete(`posts/${post._id}`);
            if (res) {
                setFetching(false);
                getCategoryPosts(setPosts);
                return;
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Wrapped className="row">
            <div className="title-and-author column ">
                <h2 className="title" onClick={postClick}>
                    {post.title}
                </h2>
                <h2 className="author">{post.author.name}</h2>
            </div>
            <div className="last-message column">
                {post.comments.length > 0 ? (
                    <h2 className="message-date">
                        {lastCommentDate(post)} <br />
                        from {post.comments[comments.length - 1].author.name}
                    </h2>
                ) : (
                    <h2 className="message-date">No messages</h2>
                )}
            </div>
            <div className="comments-number row">
                <h2 className="comments-num">{post.comments.length}</h2>
            </div>
            <div className="editing center-text">
                {post.author._id === userId && (
                    <button className="delete-button " onClick={deletePost}>
                        Delete
                    </button>
                )}
            </div>
        </Wrapped>
    );
};

export default PostCard;
