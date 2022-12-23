import React from 'react';
import Fade from "@mui/material/Fade";
import {ProductModal} from "./ProductModal";
import Modal from "@mui/material/Modal";
import {productType} from "../../../API/types/productsType";

type props = {
    open: boolean,
    productForUpdate: productType | undefined,
    closeProductModal: () => void
}

const ProductModalContainer:React.FC<props> = ({closeProductModal, productForUpdate, open}:props) => {


    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={closeProductModal}
            closeAfterTransition
        >
            <Fade in={open}>
                <div>
                    <ProductModal productForUpdate={productForUpdate} closeProductModal={closeProductModal}/>
                </div>
            </Fade>
        </Modal>
    );
};

export default ProductModalContainer;