import React from "react";

import Navbar from "../components/Navbar/Navbar.component";
import GamesHolder from "../components/GamesHolder/GamesHolder.component";

const BrowsePage = () => {
    return (
        <div className="full-page">
            <Navbar />
            <GamesHolder />
        </div>
    );
};

export default BrowsePage;
