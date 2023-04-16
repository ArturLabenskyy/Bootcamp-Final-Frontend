import { useState, createContext, useContext } from "react";

import mongoApi from "../services/api/db.api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLogin, setLogin] = useState(false);
    const [loginToken, setToken] = useState(0);

    // const getCurrentUser = async () => {
    //     try {
    //         const res = await mongoApi.get("auth/current-user");
    //         return res.data._id;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    const logoutUser = async () => {
        try {
            const res = await mongoApi.get("auth/logout");
            if (res) {
                localStorage.removeItem("token");
            }
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
                // getCurrentUser,
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
