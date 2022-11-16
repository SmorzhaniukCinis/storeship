import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import Grid from "@mui/material/Unstable_Grid2";
import {TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
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
    closeCart: (isOpen: boolean) => void
}


export const CartPage = ({isOpen, closeCart}: props) => {

    return (
        <div>
            <Modal
                open={isOpen}
                onClose={closeCart}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CartHead/>
                    <CartList/>
                </Box>
            </Modal>
        </div>
    );
};
