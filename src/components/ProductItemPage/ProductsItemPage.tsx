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
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import {AddRating} from "./AddRating";

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
                    <Paper elevation={20} sx={{p:3}}>
                        <Typography fontSize={30}>{product?.title}</Typography>
                        <div style={{display: 'flex'}}>
                            <Typography sx={{mr:2}} fontSize={20} lineHeight={2}>Price:{product?.price}$</Typography>
                            <Button color='success' variant='outlined'>add to card</Button>
                        </div>
                        <div >
                            <Tooltip followCursor enterDelay={500} title={`Votes: ${product?.rating.count}`}>
                                <Typography sx={{width:120}}>
                                    <Rating
                                        value={product?.rating.rate || null}
                                        readOnly
                                    />
                                </Typography>
                            </Tooltip>
                            <AddRating/>
                        </div>

                        <Typography>{product?.description}</Typography>
                    </Paper>

                </Grid>
            </Grid>
        </div>
    );
};

