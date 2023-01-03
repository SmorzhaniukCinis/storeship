import React from 'react';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {CardActions} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {updateCart} from "../../redux/persist/persistSlise";
import {persistSelectors} from "../../redux/persist/persistSelectors";

type props = {
    price: number
    productId: number
}

export const ProductCardAction:React.FC<props> = ({price, productId}: props) => {

    const dispatch = useAppDispatch()
    const userCart = useAppSelector(persistSelectors.selectCart)

    const addToCart = (productId: number) => {
        dispatch(updateCart({
            productId,
            quantity: 1
        }))
    }

    return (
        <CardActions sx={{display: 'flax', justifyContent: 'space-around',m:0, pb: 2}}>
            {userCart.find(productItem => productItem.productId === productId)
                ? <Button color='warning' onClick={() => addToCart(productId)} variant='outlined'>
                    <RemoveShoppingCartOutlinedIcon sx={{mr: 1}}/>
                    cancel
                </Button>
                : <Button color='success' onClick={() => addToCart(productId)} variant='outlined'>
                    <AddShoppingCartIcon sx={{mr: 1}}/>
                    Buy
                </Button>
            }
            <Typography>Price: {price}$</Typography>
        </CardActions>
    );
};

