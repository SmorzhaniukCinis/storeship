import React, {useEffect, useState} from 'react';
import Modal from '@mui/material/Modal';
import {Paper, Skeleton, Typography} from "@mui/material";
import {cartModal} from "../AdminCartsList";
import Box from "@mui/material/Box";
import {CartProductsList} from "./CartProductsList";
import {usersSagaActions} from "../../../redux/users/usersSaga";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {usersSelectors} from "../../../redux/users/usersSelectors";
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import {productsSagaActions} from "../../../redux/products/productSaga";
import {setCartProducts} from "../../../redux/carts/cartSlise";
import {cartSelectors} from "../../../redux/carts/cartsSelectors";
import {productType} from "../../../API/types/productsType";
import {setCurrentUser} from "../../../redux/users/usersSlise";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {md: '50vw', xs: '90%'},
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: {md: 3, xs: 1},
};

type props = {
    isModalOpen: boolean
    closeModal: () => void
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

export const CartDetailModal: React.FC<props> = React.memo(
    ({isModalOpen, closeModal, modalData}: props) => {

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
                for (let i = 0; i < modalData.cart.products.length; i++) {
                    dispatch(productsSagaActions.fetchProductById(modalData.cart.products[i].productId, true))
                }
            }
            return function cleanup() {
                dispatch(setCartProducts(null))
                dispatch(setCurrentUser(null))
                setTotalSum(0)
            }
        }, [dispatch, modalData])


        return (
            <div>
                <Modal open={isModalOpen} onClose={closeModal}>
                    <Paper sx={style}>
                        <Button onClick={closeModal} sx={{position: 'absolute', right: {md: 20, xs: 0}}}>
                            <CloseIcon sx={{fontSize: 30}}/>
                        </Button>
                        <Box padding={{md: 5, xs: 2}}>
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
                        <CartProductsList/>
                    </Paper>
                </Modal>
            </div>
        )
    }
)

