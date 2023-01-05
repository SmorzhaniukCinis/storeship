import React, {FC} from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import {CartProductsImg} from "./CartProductsImg";
import {CartProductName} from "./CartProductName";
import {TotalPrise} from "./TotalPrise";
import {Paper} from "@mui/material";
import {productType} from "../../API/types/productsType";

type props = {
    cartItem: {
        product: productType
        quantity: number
    }
}

export const PriceProductItem:FC<props> = ({cartItem}:props) => {
    return (
        <Grid xs={12} pt={2}>
            <Paper sx={{bgcolor: 'secondary.main', mt: 2}}>
                <Grid container columns={11} sx={{p: '5px 0 0 0 '}}>
                    <CartProductsImg image={cartItem.product.image}/>
                    <CartProductName title={cartItem.product.title}/>
                    <TotalPrise quantity={cartItem.quantity} price={cartItem.product.price}/>
                </Grid>
            </Paper>
        </Grid>
    );
};

