import { useState, createContext, useContext } from "react";

import gamesApi from "../services/api/games.api";
import dbApi from "../services/api/db.api";

export const GamesContext = createContext();

const GamesProvider = ({ children }) => {
    const [allGames, setGames] = useState([]);
    const [gamePosts, setPosts] = useState([]);
    const [category, setCategory] = useState(``);
    const [game, setGame] = useState({});

    const [isFetching, setFetching] = useState(false);

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

    const getPostAuthor = async (id) => {
        try {
            const res = await dbApi.get(`users/${id}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <GamesContext.Provider
            value={{
                allGames,
                setGames,
                getGames,
                gamePosts,
                setPosts,
                category,
                setCategory,
                game,
                setGame,
                isFetching,
                setFetching,
            }}
        >
            {" "}
            {children}{" "}
        </GamesContext.Provider>
    );
};

export const useGamesContext = () => {
    return useContext(GamesContext);
};

export { GamesProvider };
