import axios from "axios";

const gameApi = axios.create({
    baseURL: "https://www.freetogame.com/api/",
});

export default gameApi;
