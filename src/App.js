import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthProvider } from "./context/auth.context";

import "./styles/app.css";

import HomePage from "./pages/home.page";
import ErrorPage from "./pages/error.page";
import RegistrationPage from "./pages/registration.page";
import LoginPage from "./pages/login.page";
import AboutPage from "./pages/about.page";
import BrowsePage from "./pages/browse.page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },

    {
        path: "/sign-up",
        element: <RegistrationPage />,
    },

    {
        path: "/login",
        element: <LoginPage />,
    },

    {
        path: "/about",
        element: <AboutPage />,
    },

    {
        path: "/browse",
        element: <BrowsePage />,
    },

    {
        path: "*",
        element: <ErrorPage />,
    },
]);

function App() {
    return (
        <AuthProvider>
            <div className="main">
                <RouterProvider router={router} />
            </div>
        </AuthProvider>
    );
}

export default App;
