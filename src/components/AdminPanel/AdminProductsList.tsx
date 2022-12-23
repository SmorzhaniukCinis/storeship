import React, {useEffect, useState} from 'react';
import {AdminProductItem} from "./AdminProductItem";
import Box from "@mui/material/Box";
import {AdminProductsActions} from "./AdminProductsActions";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {productsSagaActions} from "../../redux/products/productSaga";
import {productsSelectors} from "../../redux/products/productsSelectors";
import {AdminPanelLoader} from "./AdminPanelLoader";
import {productType} from "../../API/types/productsType";
import ProductModalContainer from "./ProductModal/ProductModalContainer";
import {appSelectors} from "../../redux/app/appSelectors";

type props = {
    searchStr: string
}

export const AdminProductsList: React.FC<props> = ({searchStr}: props) => {

    const dispatch = useAppDispatch()
    const products = useAppSelector(productsSelectors.selectProducts)
    const filter = useAppSelector(appSelectors.selectFilter)
    const isLoading = useAppSelector(productsSelectors.selectIsProductsLoading)
    const [open, setOpen] = React.useState(false);
    const [productForUpdate, setProductForUpdate] = React.useState<productType | undefined>(undefined);
    const [filterProducts, setFilterProducts] = useState<productType[]>([])

    const openProductModal = (product: productType) => {
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

    useEffect(() => {
        switch (filter) {
            case 'Desc': dispatch(productsSagaActions.fetchProducts( undefined , 'desc'))
                break
            case 'Asc': dispatch(productsSagaActions.fetchProducts(undefined , 'asc'))
                break
            case 'jewelery': dispatch(productsSagaActions.fetchCategoryProducts('jewelery'))
                break
            case 'electronics': dispatch(productsSagaActions.fetchCategoryProducts('electronics'))
                break
            case "women's clothing": dispatch(productsSagaActions.fetchCategoryProducts("women's clothing"))
                break
            case "men's clothing": dispatch(productsSagaActions.fetchCategoryProducts("men's clothing"))
                break
        }
    }, [filter, dispatch])

    return (
        <Box textAlign='center'>
            <AdminProductsActions/>
            {
                isLoading
                    ? <AdminPanelLoader/>
                    : filterProducts?.map(product => <AdminProductItem
                        openProductModal={openProductModal}
                        key={product.id}
                        product={product}
                    />)
            }
            <ProductModalContainer open={open} productForUpdate={productForUpdate}
                                   closeProductModal={closeProductModal}/>
        </Box>
    );
};

