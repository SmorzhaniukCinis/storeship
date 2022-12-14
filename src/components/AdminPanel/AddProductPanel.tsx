import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Paper} from "@mui/material";
import {NewProductModal} from "./NewProductModal/NewProductModal";


export const AddProductPanel = () => {

    const [open, setOpen] = React.useState(true);
    const openProductModal = () => setOpen(true);
    const closeProductModal = () => setOpen(false);


    return (
        <>
            <Button onClick={openProductModal}
                    sx={{mb: 1, height: 50}}
                    size='large'
                    variant='contained'
                    color={'success'}
            >
                add product
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={closeProductModal}
                closeAfterTransition
            >
                <Fade in={open}>
                    <div>
                        <NewProductModal/>
                    </div>
                </Fade>
            </Modal>
        </>
    );
};

