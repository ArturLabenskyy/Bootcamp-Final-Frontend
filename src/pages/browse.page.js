import React from "react";

import { GamesProvider } from "../context/games.context";

import Navbar from "../components/Navbar/Navbar.component";
import GamesHolder from "../components/GamesHolder/GamesHolder.component";

const BrowsePage = () => {
    return (
        <GamesProvider>
            <div className="full-page">
                <Navbar />
                <GamesHolder />
            </div>
        </GamesProvider>
    );
};

export default BrowsePage;
