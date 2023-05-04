import React from "react";

import Navbar from "../components/Navbar/Navbar.component";
import About from "../components/About/About.component";

const AboutPage = () => {
    return (
        <div className="full-page">
            <Navbar />
            <About>
                here will be its children<h1>gdfgdfgdfgdfgd</h1>
            </About>
        </div>
    );
};

export default AboutPage;
