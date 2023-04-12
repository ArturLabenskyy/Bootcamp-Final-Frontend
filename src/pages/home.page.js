import React from "react";

import Navbar from "../components/Navbar/Navbar.component";
import Intro from "../components/Intro/Intro.component";

const HomePage = () => {
    return (
        <div className="home-page full-page ">
            <Navbar />
            <Intro />
        </div>
    );
};

export default HomePage;
