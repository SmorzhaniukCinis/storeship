import React, {useEffect, useState} from 'react';
import {Skeleton, Typography} from "@mui/material";
import dayjs from "dayjs";
import Box from "@mui/material/Box";
import {cartModal} from "../AdminCartsList";
import {productType} from "../../../API/types/productsType";
import {usersSagaActions} from "../../../redux/users/usersSaga";
import {productsSagaActions} from "../../../redux/products/productSaga";
import {setCartProducts} from "../../../redux/carts/cartSlise";
import {setCurrentUser} from "../../../redux/users/usersSlise";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {usersSelectors} from "../../../redux/users/usersSelectors";
import {cartSelectors} from "../../../redux/carts/cartsSelectors";
import {setIsProductsLoading} from "../../../redux/products/ProductsSlice";

type props = {
    modalData: cartModal | null
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

const findTotalPrice = (cartProducts: productType[], modalData: cartModal | null) => {
    if (modalData?.cart.products.length && cartProducts.length) {
        return modalData.cart.products.map(product => {
            const x = cartProducts.find(prodItem => product.productId === prodItem.id)
            if (x) {
                return x.price * product.quantity
            } else return 0
        })
    }
}

export const CartCommonInfo:React.FC<props> = ({modalData}:props) => {

    const dispatch = useAppDispatch()
    const user = useAppSelector(usersSelectors.selectCurrentUser)
    const cartProducts = useAppSelector(cartSelectors.selectCartProducts)
    const [totalSum, setTotalSum] = useState(0)


    useEffect(() => {
        if (cartProducts.length === modalData?.cart.products.length)
            setTotalSum(calculateSum(findTotalPrice(cartProducts, modalData)))
    }, [cartProducts, modalData])

    useEffect(() => {
        if (modalData) {
            dispatch(usersSagaActions.fetchUserById(modalData.cart.userId))
            dispatch(productsSagaActions.fetchCartProducts(modalData.cart.products.map(product => product.productId)))

            // setTimeout(() => {
            //     dispatch(setIsProductsLoading(false))
            // }, 2000)

        }
        return function cleanup() {
            dispatch(setCartProducts(null))
            dispatch(setCurrentUser(null))
            setTotalSum(0)
        }
    }, [dispatch, modalData])

    return (
        <Box>
            <Typography sx={{fontSize: {md: 32, xs: 24}, textAlign: 'center'}}>
                Order № {modalData?.cart.id}
            </Typography>
            <Typography sx={{cursor: 'pointer', fontSize: 20}}>
                Customer: {user?.username || <Skeleton variant="rectangular" sx={{
                display: 'inline-block',
                verticalAlign: 'middle'
            }} width={80} height={20}/>}
            </Typography>
            <Typography>
                Date: {dayjs(modalData?.cart.date).format('YYYY/MM/DD - hh:mm')}
            </Typography>
            <Box>
                <Typography>
                    Total price: {totalSum || <Skeleton variant="rectangular" sx={{
                    display: 'inline-block',
                    verticalAlign: 'middle'
                }} width={40} height={14}/>} $
                </Typography>
                <Typography>
                    Total count: {countProduct(modalData?.cart.products)
                    || <Skeleton variant="rectangular"
                                 sx={{display: 'inline-block', verticalAlign: 'middle'}} width={40}
                                 height={14}/>}
                </Typography>
            </Box>
        </Box>
    );
};

