import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {productsSagaActions} from "../../redux/products/productSaga";
import {useAppSelector} from "../../redux/hooks";
import {productsSelectors} from "../../redux/products/productsSelectors";
import {Card, Paper, Rating} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import {ProductCardImage} from "../ProductsPage/ProductCardImage";
import {ProductCardInfo} from "../ProductsPage/ProductCardInfo";
import {ProductCardAction} from "../ProductsPage/ProductCardAction";

export const ProductsItemPage = () => {

    const {productId} = useParams()
    const dispatch = useDispatch()
    const product = useAppSelector(productsSelectors.selectCurrentProduct)

    useEffect(() => {
        dispatch(productsSagaActions.fetchProductById(Number(productId)))
    }, [dispatch, productId])

    return (
        <div style={{paddingTop: '20px'}}>
            <Grid container rowSpacing={4} columnSpacing={{md: 2}}>
                <Grid xs={12} sm={5}>
                    <img style={{width: '100%'}} src={product?.image} alt={product?.image}/>
                </Grid>
                <Grid xs={12} sm={7}>
                    <Typography>{product?.title}</Typography>
                    <Typography>{product?.category}</Typography>
                    <Typography>{product?.rating.count}</Typography>
                    <Rating name="read-only" value={product?.rating.rate || null} readOnly />
                    <Typography>{product?.description}</Typography>
                </Grid>
            </Grid>
        </div>
    );
};

