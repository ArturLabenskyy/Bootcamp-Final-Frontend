import React, { useState, useEffect } from "react";

import Wrapped from "./GamesHolder.styled";
import GameCard from "../GameCard/GameCard.component";
import Loader from "../Loader/Loader.component";

import { useGamesContext } from "../../context/games.context";

import gamesApi from "../../services/api/games.api";

const GamesHolder = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isFetching, setFetching] = useState(false);

    const { allGames, setGames } = useGamesContext();

    useEffect(() => {
        const getGames = async () => {
            try {
                setFetching(true);
                const res = await gamesApi.get("games");
                if (res) {
                    setGames(res.data);
                    setFetching(false);
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
            {isFetching ? (
                <Loader />
            ) : (
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
            )}
        </Wrapped>
    );
};

export default GamesHolder;
