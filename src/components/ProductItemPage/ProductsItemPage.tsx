import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {productsSagaActions} from "../../redux/products/productSaga";
import {useAppSelector} from "../../redux/hooks";
import {productsSelectors} from "../../redux/products/productsSelectors";
import {Paper} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {ProductItemData} from "./ProductItemData";
import {ProductAddingFeedback} from "./ProductAddingFeedback";
import {ProductFeedback} from "./ProductFeedback";
import {ProductItemSkeleton} from "./ProductItemSkeleton";
import {setCurrentProduct} from "../../redux/products/ProductsSlice";

export const ProductsItemPage = () => {

    const {productId} = useParams()
    const dispatch = useDispatch()
    const product = useAppSelector(productsSelectors.selectCurrentProduct)
    const isLoading = useAppSelector(productsSelectors.selectIsProductsLoading)

    useEffect(() => {
        dispatch(productsSagaActions.fetchProductById(Number(productId)))
        return function cleanup () {
            dispatch(setCurrentProduct(null))
        }
    }, [dispatch, productId])

    if(isLoading) return <ProductItemSkeleton/>
    return (
        <div style={{padding: '20px 0'}}>
            <Grid container rowSpacing={4} columnSpacing={{md: 2}}>
                <Grid xs={12} sm={5}>
                    <img style={{width: '100%'}} src={product?.image} alt={product?.image}/>
                </Grid>
                <Grid xs={12} sm={7}>
                    <Paper elevation={20} sx={{p: 3}}>
                        <ProductItemData product={product}/>
                        <ProductAddingFeedback />
                        <ProductFeedback product={product}/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

