import React from "react";

import Navbar from "../components/Navbar/Navbar.component";
import Login from "../components/Login/Login.component";

const LoginPage = () => {
    return (
        <div className="full-page">
            <Navbar />
            <Login />
        </div>
    );
};

export default LoginPage;
