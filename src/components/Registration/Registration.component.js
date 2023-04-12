import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Wrapped from "./Registration.styled";

// import { useAuthContext } from "../../context/auth.context";

import mongoApi from "../../services/api/db.api";

const Registration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const { setToken } = useAuthContext();

    const navigate = useNavigate();

    const finishRegistration = async () => {
        try {
            const res = await mongoApi.post("auth/register", {
                name: name,
                email: email,
                password: password,
            });
            if (res) {
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Wrapped>
            <div className="register-form column">
                <label>Enter Your Name</label>
                <input
                    type="text"
                    name="nickname"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Enter Your Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Choose a password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="finish" onClick={() => finishRegistration()}>
                    Finish
                </button>
            </div>
        </Wrapped>
    );
};

export default Registration;
