import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import {CartProductItem} from "./CartProductItem";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {persistSelectors} from "../../redux/persist/persistSelectors";
import {productsSagaActions} from "../../redux/products/productSaga";
import {cartSelectors} from "../../redux/carts/cartsSelectors";


const ProductsList = {
    m: '4% 0 2% 2%',
    height: 470,
    overflowY: 'auto',
    overflowX: 'hidden',
    maxHeight: '63vh',
    '&::-webkit-scrollbar': {
        width: '3px',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'primary.dark',
        borderRadius: '2px',
    }
}


export const CartList = () => {

    const cart = useAppSelector(persistSelectors.selectCart)
    const cartWithProduct = useAppSelector(cartSelectors.selectCartWithProducts)
    const dispatch = useAppDispatch()

    useEffect(() => {
        for (let i = 1; i <= cart.length; i++) {
            dispatch(productsSagaActions.fetchProductForCart(cart))
        }
    }, [cart, dispatch])

    return (
        <Box sx={ProductsList}>
            {cartWithProduct.map(item => <CartProductItem key={item.product.id} product={item}/>)}
        </Box>
    );
};
