import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import {CartProductsImg} from "../CommonComponnents/CartProductsImg";
import {CartProductName} from "../CommonComponnents/CartProductName";
import {CartProductPrice} from "./CartProductPrice";
import {CartProductDelete} from "./CartProductDelete";
import {productType} from "../../API/types/productsType";

type props = {
    item: {
        product: productType,
        quantity: number
    }
}

export const CartProductItem: React.FC<props> = React.memo(({item}: props) => {


    return (
        <Grid container rowSpacing={1} columnSpacing={{md: 4}} paddingBottom={{md: 2}}
              sx={{borderBottom: '1px solid #ad9c9c', width: '99%', pt: 2}}
        >
            <CartProductsImg image={item.product.image}/>
            <CartProductName title={item.product.title}/>
            <CartProductPrice quantity={item.quantity} prise={item.product.price} productId={item.product.id}/>
            <CartProductDelete/>
        </Grid>
    )
})

