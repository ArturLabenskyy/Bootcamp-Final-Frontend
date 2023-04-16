import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../../context/auth.context";

import Wrapped from "./Navbar.styled";

const Navbar = () => {
    const navigate = useNavigate();

    const { isLogin, setLogin, logoutUser } = useAuthContext();

    useEffect(() => {
        // const token = localStorage.getItem("token");
        if (localStorage.getItem("isLogin")) {
            setLogin(true);
            // getCurrentUser();
        } else {
            setLogin(false);
        }
    });

    const authClick = async () => {
        try {
            if (isLogin) {
                setLogin(false);
                await logoutUser();
                navigate("/");
            } else {
                navigate("/login");
            }
        } catch (error) {}
    };

    return (
        <Wrapped>
            <div className="left-logo" onClick={() => navigate("/")}>
                <img
                    className="logo"
                    src="https://cdn-icons-png.flaticon.com/512/6841/6841127.png"
                    alt="logo"
                />
                <h1>iWannaPlay</h1>
            </div>

            <div className="mid-links center-text">
                <button className="nav-link" onClick={() => navigate("/about")}>
                    About
                </button>
                <button
                    className="nav-link"
                    onClick={() => navigate("/browse")}
                >
                    Browse
                </button>
            </div>

            <div className="right-login row">
                <button
                    className="nav-link center-text"
                    onClick={() => authClick()}
                >
                    {isLogin ? "Logout" : "Login"}
                </button>
                {!isLogin && (
                    <button
                        className="sign-up"
                        onClick={() => navigate("/sign-up")}
                    >
                        Sign up for FREE
                    </button>
                )}
            </div>
        </Wrapped>
    );
};

export default Navbar;
