import React from 'react';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {CardActions} from "@mui/material";
import {setProductToCart} from "../../redux/carts/cartSlise";
import {useAppDispatch} from "../../redux/hooks";

type props = {
    price: number
    productId: number
}

export const ProductCardAction:React.FC<props> = ({price, productId}: props) => {

    const dispatch = useAppDispatch()

    const addToCart = (productId: number) => {
        dispatch(setProductToCart({
            productId,
            quantity: 1
        }))
    }

    return (
        <CardActions sx={{display: 'flax', justifyContent: 'space-around',m:0, pb: 2}}>
            <Button onClick={() => addToCart(productId)} variant='outlined' color='success' size="small">add to cart</Button>
            <Typography>Price: {price}$</Typography>
        </CardActions>
    );
};

