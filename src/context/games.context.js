import { useState, createContext, useContext } from "react";
// import Cookies from "js-cookie";

import gamesApi from "../services/api/games.api";
// import dbApi from "../services/api/db.api";

export const GamesContext = createContext();

const GamesProvider = ({ children }) => {
    const [allGames, setGames] = useState();
    const [gamePosts, setPosts] = useState();

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

    return (
        <GamesContext.Provider
            value={{
                allGames,
                setGames,
                getGames,
                gamePosts,
                setPosts,
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
