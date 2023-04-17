import React from "react";
import { useNavigate } from "react-router-dom";

import Wrapped from "./GameCard.styled";

import { useGamesContext } from "../../context/games.context";
import dbApi from "../../services/api/db.api";

const GameCard = ({ category, description, gameUrl, logo }) => {
    const { setCategory, setPosts, setGame } = useGamesContext();

    const navigate = useNavigate();

    const cardClick = async () => {
        const gameCategory = category.replace(/\s+/g, "").toLowerCase();
        setCategory(gameCategory);

        try {
            const res = await dbApi.get(`posts/category/${gameCategory}`);
            if (res) {
                localStorage.setItem("category", JSON.stringify(gameCategory));
                setPosts(res.data);
                setGame({
                    name: category,
                    site: gameUrl,
                    logo: logo,
                    description: description,
                });
                localStorage.setItem("game-logo", JSON.stringify(logo));
                navigate(`/category/${gameCategory}`);
            }
        } catch (error) {
            console.log(error);
        }
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
