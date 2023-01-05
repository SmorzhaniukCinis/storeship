import React, {memo} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {CartHead} from "./CartHead";
import {CartList} from "./CartList";
import {setProductQuantity} from "../../redux/persist/persistSlise";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {cartSelectors} from "../../redux/carts/cartsSelectors";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    height: '80vh',
    bgcolor: 'secondary.main',
    borderRadius: 3,
    boxShadow: 24,
    p: 2,

};

type props = {
    isOpen: boolean
    closeCart: () => void
}

export const CartPage = memo(({isOpen, closeCart}: props) => {

    const dispatch = useAppDispatch()
    const cartWithProduct = useAppSelector(cartSelectors.selectCartWithProducts)

    const closeCartModal = () => {
        closeCart()
        for (let i = 0; i < cartWithProduct.length; i++) {
            dispatch(setProductQuantity({
                productId: cartWithProduct[i].product.id,
                quantity: cartWithProduct[i].quantity
            }))
        }

    }

    return (
        <div>
            <Modal open={isOpen} onClose={closeCartModal}>
                <Box sx={style}>
                    <CartHead closeCart={closeCartModal}/>
                    <CartList/>
                </Box>
            </Modal>
        </div>
    )
})
