import React from 'react';
import Button from "@mui/material/Button";
import {AdminProductItem} from "./AdminProductItem";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

export const AdminProductsList = () => {
    return (
        <Box textAlign='center'>
            <Button sx={{mb: 1}} size='large' variant='contained' color={'success'}>add product</Button>
                <AdminProductItem/>
                <AdminProductItem/>
                <AdminProductItem/>
        </Box>
    );
};

