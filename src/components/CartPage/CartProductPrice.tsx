import React, {memo} from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Grid from "@mui/material/Unstable_Grid2";
import {useAppDispatch} from "../../redux/hooks";
import {updateQuantityInCart} from "../../redux/carts/cartSlise";

type props = {
    prise: number
    quantity: number
    productId: number
}

export const CartProductPrice: React.FC<props> = memo(({prise, quantity, productId}: props) => {

    const dispatch = useAppDispatch()

    const incrementQuantity = () => {
        dispatch(updateQuantityInCart({quantity: quantity + 1, productId}))
    }
    const decrementQuantity = () => {
        dispatch(updateQuantityInCart({quantity: quantity - 1, productId}))
    }

    return (
        <Grid xs={12} md={3} textAlign='center'>
            <Typography fontSize={20}>
                Prise: {(prise * quantity).toFixed(2)}$
            </Typography>
            <Box>
                <Button onClick={incrementQuantity} disabled={quantity === 10} sx={{p: 1.1, borderRadius: 1}}>
                    <AddIcon sx={{color: 'secondary.dark'}}/>
                </Button>
                <Typography component='span' sx={{p: 1}}>{quantity}</Typography>
                <Button onClick={decrementQuantity} disabled={quantity === 1} sx={{p: 1.1, borderRadius: 1}}>
                    <RemoveIcon sx={{color: 'secondary.dark'}}/>
                </Button>
            </Box>
        </Grid>
    )
})


