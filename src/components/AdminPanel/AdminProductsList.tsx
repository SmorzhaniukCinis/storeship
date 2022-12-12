import React from 'react';
import Button from "@mui/material/Button";
import {AdminProductItem} from "./AdminProductItem";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import {AdminProductsActions} from "./AdminProductsActions";

export const AdminProductsList = () => {
    return (
        <Box textAlign='center'>

            <AdminProductsActions/>
            <AdminProductItem/>
            <AdminProductItem/>
            <AdminProductItem/>
        </Box>
    );
};

