import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {UserData} from "./UserData";

type props = {
    open: boolean
    handleClose: () => void
    openCartModal: (cartId: number) => void
}

const UserModal: React.FC<props> = ({handleClose, open, openCartModal}: props) => {

    return (
        <Modal open={open} onClose={handleClose}>
            <Box>
                <UserData openCartModal={openCartModal}/>
            </Box>
        </Modal>
    )
};

export default UserModal;