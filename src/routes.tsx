import React from "react";
import {createBrowserRouter} from "react-router-dom";
import {RootRouter} from "./RootRouter";
import {AdminPanel} from "./components/AdminPanel/AdminPanel";
import {ProductsPage} from "./components/ProductsPage/ProductsPage";
import {UserPage} from "./components/UserPage/UserPage";
import {AuthPage} from "./components/AuthPage/AuthPage";
import {ErrorPage} from "./components/CommonComponnents/ErrorPage";
import {CategoryPage} from "./components/CaregoryPage/CategoryPage";
import {ProductsItemPage} from "./components/ProductItemPage/ProductsItemPage";

export const publicRoutes = createBrowserRouter([
    {
        path: "/",
        element: <RootRouter/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <CategoryPage/>,

            },
            {
                path: 'products/:category',
                element: <ProductsPage/>,

            },
            {
                path: 'product/:productId',
                element: <ProductsItemPage/>,

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
                path: "/auth",
                element: <AuthPage/>,

            },
        ]
    },

])