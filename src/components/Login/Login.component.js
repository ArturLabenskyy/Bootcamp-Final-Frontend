import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import Wrapped from "./Login.styled";
import mongoApi from "../../services/api/db.api";
import { useAuthContext } from "../../context/auth.context";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setLogin } = useAuthContext();

    const navigate = useNavigate();

    const loginHandler = async () => {
        try {
            const res = await mongoApi.post("auth/login", {
                email: email,
                password: password,
            });
            if (res) {
                console.log(res);

                const token = res.data.token;
                Cookies.set("token", token, { expires: 7 });
                localStorage.setItem("token", token);

                setLogin(true);
                navigate("/");
                // await getCurrentUser();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Wrapped>
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
        </Wrapped>
    );
};

export default Login;
