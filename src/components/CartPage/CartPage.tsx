import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {CartHead} from "./CartHead";
import {CartList} from "./CartList";

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

export const CartPage = ({isOpen, closeCart}: props) => {

    return (
        <div>
            <Modal open={isOpen} onClose={closeCart}>
                <Box sx={style}>
                    <CartHead closeCart={closeCart}/>
                    <CartList/>
                </Box>
            </Modal>
        </div>
    );
};
