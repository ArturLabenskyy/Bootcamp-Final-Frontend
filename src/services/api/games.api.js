import axios from "axios";

const gameApi = axios.create({
    baseURL: "https://free-to-play-games-database.p.rapidapi.com/api/",
    headers: {
        "X-RapidAPI-Key": "b8ebdb88b6mshe8dc72fb8f15918p1e02dajsnac036cc155e9",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
});

export default gameApi;
