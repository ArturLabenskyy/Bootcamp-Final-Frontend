import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import Wrapped from "./Login.styled";
import Loader from "../Loader/Loader.component";

import mongoApi from "../../services/api/db.api";
import { useAuthContext } from "../../context/auth.context";
import { useGamesContext } from "../../context/games.context";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { isFetching, setFetching } = useGamesContext();
    const { setLogin, getCurrentUser } = useAuthContext();

    const navigate = useNavigate();

    const loginHandler = async () => {
        try {
            setFetching(true);
            const res = await mongoApi.post("auth/login", {
                email: email,
                password: password,
            });
            if (res) {
                const token = res.data.token;
                Cookies.set("token", token, { expires: 7 });
                localStorage.setItem("isLogin", true);

                setLogin(true);
                const userId = await getCurrentUser();
                localStorage.setItem("userId", JSON.stringify(userId._id));
                setFetching(false);
                navigate("/");
            }
        } catch (error) {
            setFetching(false);

            console.log(error);
        }
    };

    return (
        <Wrapped>
            {isFetching ? (
                <Loader />
            ) : (
                <div className="login-form column">
                    <label>Enter Your Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Enter Your Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="finish" onClick={() => loginHandler()}>
                        Login
                    </button>
                </div>
            )}
        </Wrapped>
    );
};

export default Login;
