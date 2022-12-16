import React from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {ProductStatusModal} from "./ProductStatusModal";
import {newProduct} from "../../../API/types/productsType";

type props = {
    open: boolean
    productForUpdate: newProduct | undefined
    isSuccess: boolean
    closeProductModal: () => void
    handleClose: () => void
}

export const ProductActions: React.FC<props> = (props: props) => {

    const {open, productForUpdate, isSuccess, closeProductModal, handleClose} = props

    return (
        <>
            <Box display='flex' justifyContent='space-between'>
                <Button sx={{height: 50}} type="submit" variant='contained' color='success'>
                    {productForUpdate ? 'update product' : 'add product'}
                </Button>
                <Button sx={{height: 50}} onClick={closeProductModal} variant='contained'
                        color='warning'>cancel</Button>
            </Box>
            <ProductStatusModal handleClose={handleClose} open={open} isSuccess={isSuccess}/>
        </>
    );
};

