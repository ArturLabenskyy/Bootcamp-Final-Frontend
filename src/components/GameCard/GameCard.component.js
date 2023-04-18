import React from "react";
import { useNavigate } from "react-router-dom";

import Wrapped from "./GameCard.styled";

import { useGamesContext } from "../../context/games.context";
import { usePostContext } from "../../context/post.context";
// import dbApi from "../../services/api/db.api";

const GameCard = ({ category, description, logo }) => {
    const { setCategory, setPosts } = useGamesContext();
    const { getCategoryPosts } = usePostContext();

    const navigate = useNavigate();

    const cardClick = () => {
        const gameCategory = category.replace(/\s+/g, "").toLowerCase();
        setCategory(gameCategory);
        localStorage.setItem("category", JSON.stringify(gameCategory));
        localStorage.setItem("game-logo", JSON.stringify(logo));

        getCategoryPosts(setPosts);
        navigate(`/category/${gameCategory}`);
    };

    return (
        <Wrapped>
            <div className="game-card" onClick={cardClick}>
                <img src={logo} alt="logo" />
                <h2 className="game-name center-text">{category}</h2>
                <h3 className="description center-text">{description}</h3>
            </div>
        </Wrapped>
    );
};

export default GameCard;
