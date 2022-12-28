import React from 'react';
import Modal from '@mui/material/Modal';
import {Paper} from "@mui/material";
import {cartModal} from "../AdminCartsList";
import {CartProductsList} from "./CartProductsList";
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";
import {CartCommonInfo} from "./CartCommonInfo";
import Box from "@mui/material/Box";

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


export const CartDetailModal: React.FC<props> = React.memo(
    ({isModalOpen, closeModal, modalData}: props) => {

        return (
            <div>
                <Modal open={isModalOpen} onClose={closeModal}>
                    <Paper sx={style}>
                        <Button onClick={closeModal} sx={{position: 'absolute', right: {md: 20, xs: 0}}}>
                            <CloseIcon sx={{fontSize: 30}}/>
                        </Button>
                        <Box padding={{md: 5, xs: 2}}>
                            <CartCommonInfo modalData={modalData}/>
                            <CartProductsList modalData={modalData} />
                        </Box>
                    </Paper>
                </Modal>
            </div>
        )
    }
)

