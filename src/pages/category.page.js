import React from "react";

import Navbar from "../components/Navbar/Navbar.component";
import PostsHolder from "../components/PostsHolder/PostsHolder.component";

const CategoryPage = () => {
    return (
        <div className="full-page">
            <Navbar />
            <PostsHolder />
        </div>
    );
};

export default CategoryPage;
