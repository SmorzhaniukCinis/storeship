import React from "react";
import {createBrowserRouter} from "react-router-dom";
import {AppRoot} from "./components/Surfaces/AppRoot";
import {AdminPanel} from "./components/AdminPanel/AdminPanel";
import {ProductsPage} from "./components/ProductsPage/ProductsPage";
import {UserPage} from "./components/UserPage/UserPage";
import {CartPage} from "./components/CartPage/CartPage";
import {AuthPage} from "./components/AuthPage/AuthPage";
import {ErrorPage} from "./components/CommonComponnents/ErrorPage";

export const publicRoutes = createBrowserRouter([
    {
        path: "/",
        element: <AppRoot/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <ProductsPage/>,

            },
            {
                path: "/admin",
                element: <AdminPanel/>,

            },

            {
                path: "/profile/:userId",
                element: <UserPage/>,

            },
            {
                path: "/cart",
                element: <CartPage/>,

            },
            {
                path: "/auth",
                element: <AuthPage/>,

            },
        ]
    },

])