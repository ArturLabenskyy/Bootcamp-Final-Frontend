import React from "react";

import Wrapped from "./About.styled";

const About = () => {
    return (
        <Wrapped>
            <div className="about center-text">
                <h1 className="title center-text">
                    I created this App for Gamers that want to try some new
                    free-to-play games but they don't want to start play alone
                    from zero. You can find there another Gamers who also
                    curious to explore new games.
                </h1>
                <h1 className="step-one">Step ONE: SIGN UP!!!!</h1>

                <div className="gif">
                    <img
                        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWE1MzVmNDJlOGRjMjI2OTM1YWU4ZmNlYjljNjExMjVkZmY3NTBlZCZjdD1n/eDb56XBpjXTcqBhD4Q/giphy.gif"
                        alt="My GIF"
                    />
                </div>
            </div>
        </Wrapped>
    );
};

export default About;
