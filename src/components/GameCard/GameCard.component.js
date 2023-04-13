import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import Wrapped from "./GameCard.styled";

import { useGamesContext } from "../../context/games.context";
import dbApi from "../../services/api/db.api";

const GameCard = ({ category, description, gameUrl, logo }) => {
    const { setPosts, allPosts } = useGamesContext();

    const navigate = useNavigate();

    const cardClick = async () => {
        const gameCategory = category.toLowerCase();

        const token = Cookies.get("token");
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const res = await dbApi.get(`posts/${gameCategory}`, config);
            if (res) {
                console.log(res.data);
                setPosts(res.data);
                console.log(allPosts);
                navigate(`/posts/${gameCategory}`);
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
