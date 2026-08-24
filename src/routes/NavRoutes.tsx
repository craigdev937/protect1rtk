import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router";
import { NotFound } from "../components/NotFound";
import { Navbar } from "./Navbar";
import { Home } from "../pages/home/Home";
import { Posts } from "../pages/posts/Posts";
import { AllUsers } from "../pages/all/AllUsers";
import { Login } from "../pages/login/Login";
import { User } from "../pages/user/User";

const RouteList = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/posts",
                element: <Posts />
            },
            {
                path: "/login",
                element: <Login />
            },
            // THESE ROUTES ARE PROTECTED WITH LOGIN
            {
                path: "/users",
                element: <AllUsers />
            },
            {
                path: "/user/:id",
                element: <User />
            }
        ]
    }
]);

export const NavRoutes = () => {
    return (
        <React.Fragment>
            <RouterProvider router={RouteList} />
        </React.Fragment>
    );
};



