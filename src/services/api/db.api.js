import axios from "axios";
import Cookies from "js-cookie";

const dbApi = axios.create({
    baseURL: "https://bootcamp-final-backend.onrender.com/api/v1/",
});

dbApi.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${Cookies.get("token")}`;
    return config;
});

export default dbApi;
