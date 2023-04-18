import React, { useEffect, useState } from "react";

import { useGamesContext } from "../../context/games.context";
import { usePostContext } from "../../context/post.context";

import Wrapped from "./PostsHolder.styled";
import PostCard from "../PostCard/PostCard.component";
import Loader from "../Loader/Loader.component";

import PostForm from "../PostForm/PostForm.component";

const PostsHolder = () => {
    const [showModal, setShowModal] = useState(false);
    const [isGamePostsResolved, setIsGamePostsResolved] = useState(false);

    const { gamePosts, category, setPosts, isFetching, setFetching } =
        useGamesContext();
    const { getCategoryPosts } = usePostContext();

    useEffect(() => {
        if (!gamePosts.length) {
            getCategoryPosts();
        } else {
            setIsGamePostsResolved(true);
        }
    }, [getCategoryPosts, gamePosts]);

    const closeModal = () => {
        setShowModal(false);
    };

    const openModal = () => {
        setShowModal(true);
    };

    return (
        <Wrapped show={showModal}>
            {isFetching || !isGamePostsResolved ? (
                <Loader />
            ) : (
                <>
                    <div className="category-info row">
                        <img
                            className="category-logo"
                            src={JSON.parse(localStorage.getItem("game-logo"))}
                            alt="game-logo"
                        />
                        <button className="add-post" onClick={openModal}>
                            Create Post
                        </button>
                    </div>
                    <div className="posts-holder">
                        <PostForm
                            closeModal={closeModal}
                            category={category}
                            show={showModal}
                            setFetching={setFetching}
                            postTitle=""
                            postContent=""
                        />
                        <div className="posts-info row">
                            <h2 className="title-author">Title / Author</h2>
                            <h2 className="last-message">Last message</h2>
                            <h2 className="comments ">Comments</h2>
                            <h2 className="actions">Actions</h2>
                        </div>
                        <div className="posts column">
                            {gamePosts.map((post) => (
                                <PostCard
                                    key={post._id}
                                    post={post}
                                    comments={post.comments}
                                    setPosts={setPosts}
                                    setFetching={setFetching}
                                />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </Wrapped>
    );
};

export default PostsHolder;
