import { useState, createContext, useContext } from "react";
import Cookies from "js-cookie";

import mongoApi from "../services/api/db.api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLogin, setLogin] = useState(false);
    const [loginToken, setToken] = useState(0);

    const getCurrentUser = async () => {
        const token = Cookies.get("token");
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const res = await mongoApi.get("auth/current-user", config);
            // console.log(res);
            return res.data._id;
        } catch (error) {
            console.log(error);
        }
    };

    const logoutUser = async () => {
        try {
            const res = await mongoApi.get("auth/logout");
            Cookies.remove("token");
            localStorage.removeItem("token");
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                isLogin,
                setLogin,
                loginToken,
                setToken,
                getCurrentUser,
                logoutUser,
            }}
        >
            {" "}
            {children}{" "}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export { AuthProvider };
