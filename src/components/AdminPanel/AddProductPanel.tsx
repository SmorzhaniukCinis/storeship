import React from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import {ProductModal} from "./ProductModal/ProductModal";


export const AddProductPanel = () => {

    const [open, setOpen] = React.useState(false);
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
                        <ProductModal closeProductModal={closeProductModal}/>
                    </div>
                </Fade>
            </Modal>
        </>
    );
};

