import React from "react";

import Navbar from "../components/Navbar/Navbar.component";
import Post from "../components/Post/Post.component";

const PostPage = () => {
    return (
        <div className="full-page">
            <Navbar />
            <Post />
        </div>
    );
};

export default PostPage;
