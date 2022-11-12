import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {currentCategory} from "../../redux/products/types";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {productsSagaActions} from "../../redux/products/productSaga";
import {productsSelectors} from "../../redux/products/productsSelectors";
import {appSelectors} from "../../redux/app/appSelectors";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import {Card, CardActions, CardContent, CardMedia, Paper, Rating} from "@mui/material";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

export const ProductsPage = () => {

    const {category} = useParams()
    const products = useAppSelector(productsSelectors.selectProducts)

    const dispatch = useAppDispatch()

    useEffect(() => {
        switch (category) {
            case 'jewelery': {
                dispatch(productsSagaActions.fetchCategoryProducts('jewelery', 10))
                break
            }
            case "men-clothing": {
                dispatch(productsSagaActions.fetchCategoryProducts("men's clothing", 10))
                break
            }
            case 'electronics': {
                dispatch(productsSagaActions.fetchCategoryProducts('electronics', 10))
                break
            }
            case "women-clothing": {
                dispatch(productsSagaActions.fetchCategoryProducts("women's clothing", 10))
                break
            }
        }
    }, [category, dispatch])

    return (
        <Box sx={{m: 2}}>
            <Grid container rowSpacing={4} columnSpacing={{xs: 2, sm: 4, md: 6}}>
                {
                    products.map(product =>
                        <Grid key={product.id} xs={12} sm={3}>
                            <Card sx={{minWidth: 245}}>
                                <CardMedia sx={{height: 250, minWidth: 245,}}>
                                    <div style={{
                                        backgroundColor: 'white',
                                        display: 'flex',
                                        height: 250,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <img style={{maxWidth: 245, maxHeight: 250}} src={product.image} alt="sadf"/>
                                    </div>

                                </CardMedia>
                                <CardContent>
                                    <Tooltip placement="top-start" arrow title={product.title}>
                                        <Typography sx={{overflow: 'hidden', height: 60}} gutterBottom variant="h5" component="div">
                                            {product.title}
                                        </Typography>
                                    </Tooltip>
                                    <Tooltip arrow title={`votes:${product.rating.count}`}>
                                        <Typography>
                                            <Rating value={product.rating.rate} readOnly />
                                        </Typography>
                                    </Tooltip>
                                    <Typography sx={{height: 80, overflow: 'hidden'}} variant="body2" color="text.secondary">
                                        {product.description}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{display: 'flax', justifyContent: 'space-around'}}>
                                    <Button variant='outlined' color='success' size="small">add to cart</Button>
                                    <Typography>Price: {product.price}$</Typography>
                                </CardActions>
                            </Card>
                        </Grid>)
                }
            </Grid>
        </Box>
    );
};

