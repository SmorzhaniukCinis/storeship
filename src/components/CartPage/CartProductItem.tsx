import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import {TextField} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import {CartProductsImg} from "../CommonComponnents/CartProductsImg";
import {CartProductName} from "../CommonComponnents/CartProductName";
import {CartProductPrice} from "./CartProductPrice";
import {CartProductDelete} from "./CartProductDelete";



export const CartProductItem = () => {
    return (
        <Grid container rowSpacing={1} columnSpacing={{md: 4}} paddingBottom={{md: 2}}
              sx={{borderBottom: '1px solid #ad9c9c', width: '99%', pt: 2}}>
            <CartProductsImg/>
            <CartProductName/>
            <CartProductPrice/>
            <CartProductDelete/>
        </Grid>
    );
};

