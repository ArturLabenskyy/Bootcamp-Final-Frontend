import React, { useEffect } from "react";

import Wrapped from "./GamesHolder.styled";
import GameCard from "../GameCard/GameCard.component";

import { useGamesContext } from "../../context/games.context";

import gamesApi from "../../services/api/games.api";

const GamesHolder = () => {
    const { allGames, setGames } = useGamesContext();

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
            {!allGames && <h1>No games</h1>}
            {allGames &&
                allGames.map((game) => {
                    return (
                        <GameCard
                            key={game.id}
                            category={game.title}
                            description={game.short_description}
                            gameUrl={game.game_url}
                            logo={game.thumbnail}
                        />
                    );
                })}
        </Wrapped>
    );
};

export default GamesHolder;
