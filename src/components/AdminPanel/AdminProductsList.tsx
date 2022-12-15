import React, {useEffect} from 'react';
import {AdminProductItem} from "./AdminProductItem";
import Box from "@mui/material/Box";
import {AdminProductsActions} from "./AdminProductsActions";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {productsSagaActions} from "../../redux/products/productSaga";
import {productsSelectors} from "../../redux/products/productsSelectors";
import {AdminPaneLoader} from "./AdminPaneLoader";
import {AddProductPanel} from "./AddProductPanel";
import Fade from "@mui/material/Fade";
import {ProductModal} from "./ProductModal/ProductModal";
import Modal from "@mui/material/Modal";
import {productType} from "../../API/types/productsType";

export const AdminProductsList = () => {

    const dispatch = useAppDispatch()
    const products = useAppSelector(productsSelectors.selectProducts)
    const isLoading = useAppSelector(productsSelectors.selectIsProductsLoading)
    const [open, setOpen] = React.useState(false);
    const [productForUpdate, setProductForUpdate] = React.useState<productType | undefined>(undefined);
    const openProductModal = (product:productType) => {
        setOpen(true);
        setProductForUpdate(product)
    }
    const closeProductModal = () => setOpen(false);


    useEffect(() => {
        dispatch(productsSagaActions.fetchProducts(undefined, "asc"))
    }, [dispatch])

    return (
        <Box textAlign='center'>
            <AdminProductsActions/>
            {
                isLoading
                    ? <AdminPaneLoader/>
                    : products?.map(product => <AdminProductItem
                        openProductModal={openProductModal}
                        key={product.id} product={product}
                    />)
            }
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
        </Box>
    );
};

