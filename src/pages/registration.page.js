import React from "react";

import Navbar from "../components/Navbar/Navbar.component";
import Registration from "../components/Registration/Registration.component";

const RegistrationPage = () => {
    return (
        <div className="full-page">
            <Navbar />
            <Registration />
        </div>
    );
};

export default RegistrationPage;
