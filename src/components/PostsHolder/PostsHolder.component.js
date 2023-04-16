import React from "react";

import { useGamesContext } from "../../context/games.context";

import Wrapped from "./PostsHolder.styled";
import PostCard from "../PostCard/PostCard.component";

const PostsHolder = () => {
    const { gamePosts } = useGamesContext();

    return (
        <Wrapped className="column center-text">
            <div className="posts-holder">
                <div className="posts-info row">
                    <h2 className="title-author">Title / Author</h2>
                    <h2 className="last-message">Last message</h2>
                    <h2 className="comments ">Comments</h2>
                </div>
                <div className="posts">
                    {gamePosts.map((post) => {
                        return (
                            <PostCard
                                key={post._id}
                                post={post}
                                comments={post.comments}
                            />
                        );
                    })}
                </div>
            </div>
        </Wrapped>
    );
};

export default PostsHolder;
