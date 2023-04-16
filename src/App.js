import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthProvider } from "./context/auth.context";
import { GamesProvider } from "./context/games.context";
import { CommentsProvider } from "./context/comments.context";
import { PostProvider } from "./context/post.context";

import "./styles/app.css";

import HomePage from "./pages/home.page";
import ErrorPage from "./pages/error.page";
import RegistrationPage from "./pages/registration.page";
import LoginPage from "./pages/login.page";
import AboutPage from "./pages/about.page";
import BrowsePage from "./pages/browse.page";
import CategoryPage from "./pages/category.page";
import PostPage from "./pages/post.page";

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
        path: "/category/:category",
        element: <CategoryPage />,
    },

    {
        path: "/posts/:id",
        element: <PostPage />,
    },

    {
        path: "*",
        element: <ErrorPage />,
    },
]);

function App() {
    return (
        <AuthProvider>
            <GamesProvider>
                <CommentsProvider>
                    <PostProvider>
                        <div className="main">
                            <RouterProvider router={router} />
                        </div>
                    </PostProvider>
                </CommentsProvider>
            </GamesProvider>
        </AuthProvider>
    );
}

export default App;
