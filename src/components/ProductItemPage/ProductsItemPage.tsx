import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {productsSagaActions} from "../../redux/products/productSaga";
import {useAppSelector} from "../../redux/hooks";
import {productsSelectors} from "../../redux/products/productsSelectors";
import {Card, Paper, Rating, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import {ProductCardImage} from "../ProductsPage/ProductCardImage";
import {ProductCardInfo} from "../ProductsPage/ProductCardInfo";
import {ProductCardAction} from "../ProductsPage/ProductCardAction";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import {AddRating} from "./AddRating";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import {DisabledRating} from "./DisabledRating";

export const ProductsItemPage = () => {

    const {productId} = useParams()
    const dispatch = useDispatch()
    const product = useAppSelector(productsSelectors.selectCurrentProduct)

    useEffect(() => {
        dispatch(productsSagaActions.fetchProductById(Number(productId)))
    }, [dispatch, productId])

    return (
        <div style={{padding: '20px 0'}}>
            <Grid container rowSpacing={4} columnSpacing={{md: 2}}>
                <Grid xs={12} sm={5}>
                    <img style={{width: '100%'}} src={product?.image} alt={product?.image}/>
                </Grid>
                <Grid xs={12} sm={7}>
                    <Paper elevation={20} sx={{p: 3}}>
                        <Typography fontSize={30}>{product?.title}</Typography>
                        <div style={{display: 'flex', marginTop: 10}}>
                            <Typography sx={{mr: 2}} fontSize={20} lineHeight={2}>Price:{product?.price}$</Typography>
                            <Button color='success' variant='outlined'>add to card</Button>
                        </div>
                        <div style={{maxWidth: 210, display: 'flex', justifyContent: 'space-between'}}>
                            <Tooltip followCursor enterDelay={500} title={`Votes: ${product?.rating.count}`}>
                                <Typography sx={{width: 120, pt: '20px', pb: 1}}>
                                    <DisabledRating rating={product?.rating.rate} />
                                </Typography>
                            </Tooltip>

                        </div>

                        <Typography>{product?.description}</Typography>

                        <TextField
                            sx={{width: '100%', mt: 2}}
                            id="standard-multiline-flexible"
                            label="Enter your feedback"
                            multiline
                            maxRows={4}
                            variant="standard"
                        />
                        <Box display='flex' sx={{mt:1, mb:1}}>
                            <Button color='success' variant='outlined'>add feedback</Button>
                            <AddRating/>
                        </Box>
                        <div>
                            <div>
                                <Typography sx={{fontSize: 30,}}>Feedbacks</Typography>
                            </div>

                            <Paper elevation={3} sx={{bgcolor: 'secondary.main', p: 2}}>
                                <Box display='flex' sx={{pb: 1}}>
                                    <Avatar sx={{mt: 0.5}} alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                                    <Box sx={{ml: 1}}>
                                        <Typography sx={{ml:0.5}}>Remy Sharp</Typography>
                                        <DisabledRating rating={product?.rating.rate} />
                                    </Box>
                                </Box>
                                <Typography>
                                    dfafds
                                </Typography>
                            </Paper>

                        </div>
                    </Paper>

                </Grid>
            </Grid>
        </div>
    );
};

