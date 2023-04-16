import React, { useState, useEffect } from "react";

import Wrapped from "./GamesHolder.styled";
import GameCard from "../GameCard/GameCard.component";

import { useGamesContext } from "../../context/games.context";

import gamesApi from "../../services/api/games.api";

const GamesHolder = () => {
    const { allGames, setGames } = useGamesContext();
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const getGames = async () => {
            try {
                const res = await gamesApi.get("games");
                if (res) {
                    setGames(res.data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        getGames();
    }, [setGames]);

    return (
        <Wrapped>
            <div className="filter row center-text">
                <h2>Search: </h2>
                <input
                    type="text"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="row">
                {!allGames && <h1>No games</h1>}
                {allGames &&
                    allGames
                        .filter((game) =>
                            game.title
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase())
                        )
                        .map((game) => {
                            return (
                                <GameCard
                                    key={game.id}
                                    category={game.title}
                                    description={game.short_description}
                                    gameUrl={game.game_url}
                                    logo={game.thumbnail}
                                    comments={game.comments}
                                />
                            );
                        })}
            </div>
        </Wrapped>
    );
};

export default GamesHolder;
