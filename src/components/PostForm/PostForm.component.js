import React, { useState } from "react";

import { usePostContext } from "../../context/post.context";
import { useGamesContext } from "../../context/games.context";

import Wrapped from "./PostForm.styled";

const PostForm = ({
    closeModal,
    show,
    setFetching,
    postTitle,
    postContent,
}) => {
    const [title, setTitle] = useState(postTitle);
    const [content, setContent] = useState(postContent);

    const { createPost } = usePostContext();
    const { setPosts } = useGamesContext();

    const publicPost = async () => {
        try {
            setFetching(true);

            let posts = JSON.parse(localStorage.getItem("posts"));
            const userId = JSON.parse(localStorage.getItem("userId"));
            const newPost = {
                title: title,
                content: content,
                author: userId,
                category: JSON.parse(localStorage.getItem("category")),
            };

            const res = await createPost(newPost);
            if (res) {
                posts = res;
                setPosts(posts);
                closeModal();
                setFetching(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Wrapped show={show} className="center-text">
            <input
                className="input-style"
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className="post-content input-style"
                type="text"
                placeholder="Your Text"
                onChange={(e) => setContent(e.target.value)}
            />
            <div className="buttons row center-text">
                <button onClick={publicPost}>Submit</button>
                <button onClick={closeModal}>Cancel</button>
            </div>
        </Wrapped>
    );
};

export default PostForm;
