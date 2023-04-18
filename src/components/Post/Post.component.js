import React, { useState, useEffect } from "react";

import Wrapped from "./Post.styled";
import Comment from "../Comment/Comment.component";
import CommentForm from "../CommentForm/CommentForm.component";
import Loader from "../Loader/Loader.component";

import { usePostContext } from "../../context/post.context";
import { useGamesContext } from "../../context/games.context";
import { useCommentsContext } from "../../context/comments.context";

const Post = () => {
    const [showModal, setShowModal] = useState(false);
    const [isFetching, setFetching] = useState(false);

    const { post, postPublicDate, setPost } = usePostContext();
    const { game } = useGamesContext();
    const { allComments, updatePostComments } = useCommentsContext();

    const newPost = JSON.parse(localStorage.getItem("post"));

    useEffect(() => {
        if (!allComments.length) {
            post.length
                ? updatePostComments(post._id)
                : updatePostComments(newPost._id);
        }
    }, [allComments, post._id, updatePostComments]);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const publicDate = postPublicDate(post);

    const answerClick = () => {
        handleShowModal();
    };

    return (
        <Wrapped>
            {isFetching ? (
                <Loader />
            ) : (
                <>
                    <div className="post">
                        <div className="post-info row">
                            <img
                                className="post-logo"
                                src={
                                    game.logo
                                        ? game.logo
                                        : JSON.parse(
                                              localStorage.getItem("game-logo")
                                          )
                                }
                                alt="game-logo"
                            />
                            <button className="answer" onClick={answerClick}>
                                Answer
                            </button>
                        </div>
                        <div className="header-box">
                            <div className="post-header row center-text">
                                <h1 className="author">
                                    {post.length
                                        ? post.author.name
                                        : newPost.author.name}
                                </h1>
                                <h1 className="title">
                                    {post.length ? post.title : newPost.title}
                                </h1>
                                <h2 className="publish-date">{publicDate}</h2>
                            </div>
                            <div className="post-content">
                                <h1 className="post-content">{post.content}</h1>
                            </div>
                        </div>
                        <div className="comments">
                            {allComments.map((el) => {
                                return (
                                    <Comment
                                        key={el._id}
                                        comment={el}
                                        setFetching={setFetching}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <CommentForm
                        show={showModal}
                        handleClose={handleCloseModal}
                        setFetching={setFetching}
                        isFetching={isFetching}
                    />
                </>
            )}
        </Wrapped>
    );
};

export default Post;
