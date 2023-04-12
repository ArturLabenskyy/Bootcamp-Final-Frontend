import axios from "axios";

const dbApi = axios.create({
    baseURL: "https://wannaplay.cyclic.app/api/v1/",
});

export default dbApi;
