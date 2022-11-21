import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import {CartProductsImg} from "./CartProductsImg";
import {CartProductName} from "./CartProductName";
import {TotalPrise} from "./TotalPrise";
import {Paper} from "@mui/material";

export const PriceProductItem = () => {
    return (
        <Grid xs={12} pt={2}>
            <Paper sx={{bgcolor: 'secondary.main', mt: 2}}>
                <Grid container columns={11} sx={{p: '5px 0 0 0 '}}>
                    <CartProductsImg/>
                    <CartProductName/>
                    <TotalPrise/>
                </Grid>
            </Paper>
        </Grid>
    );
};

