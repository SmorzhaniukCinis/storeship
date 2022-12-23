import React, {useEffect, useState} from 'react';
import {AdminProductItem} from "./AdminProductItem";
import Box from "@mui/material/Box";
import {AdminProductsActions} from "./AdminProductsActions";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {productsSagaActions} from "../../redux/products/productSaga";
import {productsSelectors} from "../../redux/products/productsSelectors";
import {AdminPanelLoader} from "./AdminPanelLoader";
import Fade from "@mui/material/Fade";
import {ProductModal} from "./ProductModal/ProductModal";
import Modal from "@mui/material/Modal";
import {productType} from "../../API/types/productsType";

type props = {
    searchStr: string
}

export const AdminProductsList:React.FC<props> = ({searchStr}:props) => {

    const dispatch = useAppDispatch()
    const products = useAppSelector(productsSelectors.selectProducts)
    const isLoading = useAppSelector(productsSelectors.selectIsProductsLoading)
    const [open, setOpen] = React.useState(false);
    const [productForUpdate, setProductForUpdate] = React.useState<productType | undefined>(undefined);
    const [filterProducts, setFilterProducts] = useState<productType[]>([])

    const openProductModal = (product:productType) => {
        setOpen(true);
        setProductForUpdate(product)
    }
    const closeProductModal = () => setOpen(false);

    useEffect(() => {
        dispatch(productsSagaActions.fetchProducts(undefined, "asc"))
    }, [dispatch])

    useEffect(() => {
        if (searchStr) {
            setFilterProducts(products.filter(item => item.title.indexOf(searchStr) !== -1))
        } else {
            setFilterProducts(products)
        }

    }, [searchStr, products])

    console.log('render')

    return (
        <Box textAlign='center'>
            <AdminProductsActions/>
            {
                isLoading
                    ? <AdminPanelLoader/>
                    : filterProducts?.map(product => <AdminProductItem
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

