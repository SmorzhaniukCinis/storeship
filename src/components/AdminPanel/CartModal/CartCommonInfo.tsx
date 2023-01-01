import React, {useEffect, useState} from 'react';
import {Skeleton, Typography} from "@mui/material";
import dayjs from "dayjs";
import Box from "@mui/material/Box";
import {cartModal} from "../AdminCartsList";
import {productType} from "../../../API/types/productsType";
import {usersSagaActions} from "../../../redux/users/usersSaga";
import {productsSagaActions} from "../../../redux/products/productSaga";
import {setCartProducts} from "../../../redux/carts/cartSlise";
import {setUser} from "../../../redux/users/usersSlise";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {usersSelectors} from "../../../redux/users/usersSelectors";
import {cartSelectors} from "../../../redux/carts/cartsSelectors";
import {setIsProductsLoading} from "../../../redux/products/ProductsSlice";
import {cartType} from "../../../API/types/cartsTypes";

type props = {
    cart: cartType | null
}

const countProduct = (products?: { productId: number, quantity: number }[]) => {
    if (products) {
        return calculateSum(products.map(product => product.quantity))
    } else return null
}

const calculateSum = (arr: number[] = []): number => {
    let sum = arr.shift() || 0
    if (arr.length > 0) {
        return sum + calculateSum(arr)
    } else return sum
}

const findTotalPrice = (cartProducts: productType[], cart: cartType | null) => {
    if (cart?.products.length && cartProducts.length) {
        return cart?.products.map(product => {
            const x = cartProducts.find(prodItem => product.productId === prodItem.id)
            if (x) {
                return x.price * product.quantity
            } else return 0
        })
    }
}

export const CartCommonInfo:React.FC<props> = ({cart}:props) => {

    const dispatch = useAppDispatch()
    const user = useAppSelector(usersSelectors.selectCurrentUser)
    const cartProducts = useAppSelector(cartSelectors.selectCartProducts)
    const [totalSum, setTotalSum] = useState(0)


    useEffect(() => {
        if (cartProducts.length === cart?.products.length)
            setTotalSum(calculateSum(findTotalPrice(cartProducts, cart)))
    }, [cartProducts, cart])

    useEffect(() => {
        if (cart) {
            dispatch(usersSagaActions.fetchUserById(cart?.userId))
            dispatch(productsSagaActions.fetchCartProducts(cart?.products.map(product => product.productId)))
        }
        return function cleanup() {
            dispatch(setCartProducts(null))
            dispatch(setUser(null))
            setTotalSum(0)
        }
    }, [dispatch, cart])

    return (
        <Box>
            <Typography sx={{fontSize: {md: 32, xs: 24}, textAlign: 'center'}}>
                Order № {cart?.id}
            </Typography>
            <Typography sx={{cursor: 'pointer', fontSize: 20}}>
                Customer: {user?.username || <Skeleton variant="rectangular" sx={{
                display: 'inline-block',
                verticalAlign: 'middle'
            }} width={80} height={20}/>}
            </Typography>
            <Typography>
                Date: {dayjs(cart?.date).format('YYYY/MM/DD - hh:mm')}
            </Typography>
            <Box>
                <Typography>
                    Total price: {totalSum || <Skeleton variant="rectangular" sx={{
                    display: 'inline-block',
                    verticalAlign: 'middle'
                }} width={40} height={14}/>} $
                </Typography>
                <Typography>
                    Total count: {countProduct(cart?.products)
                    || <Skeleton variant="rectangular"
                                 sx={{display: 'inline-block', verticalAlign: 'middle'}} width={40}
                                 height={14}/>}
                </Typography>
            </Box>
        </Box>
    );
};

