import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {productsSagaActions} from "../../redux/products/productSaga";
import {productsSelectors} from "../../redux/products/productsSelectors";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import {Card} from "@mui/material";
import {ProductCardImage} from "./ProductCardImage";
import {ProductCardInfo} from "./ProductCardInfo";
import {ProductCardAction} from "./ProductCardAction";
import {ProductsSkeleton} from "./ProductsSkeleton";

export const ProductsPage = () => {

    const {category} = useParams()
    const navigate = useNavigate()
    const products = useAppSelector(productsSelectors.selectProducts)
    const isProductLoading = useAppSelector(productsSelectors.selectIsProductsLoading)
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

    const goToProduct = (id:number) => {
        navigate(`/product/${id}`)
    }


    if (isProductLoading) return <ProductsSkeleton/>
    return (
        <Box sx={{m: 2}}>
            <Grid container rowSpacing={4} columnSpacing={{md: 2}}>
                {
                    products.map(product =>
                        <Grid key={product.id} sx={{pb: 3}}  xs={12} sm={3}>
                            <Card elevation={10} sx={{minWidth: 245,}}>
                                <ProductCardImage id={product.id} goToProduct={goToProduct} url={product.image}/>
                                <ProductCardInfo goToProduct={goToProduct} product={product}/>
                                <ProductCardAction productId={product.id} price={product.price}/>
                            </Card>
                        </Grid>)
                }
            </Grid>
        </Box>
    );
};

