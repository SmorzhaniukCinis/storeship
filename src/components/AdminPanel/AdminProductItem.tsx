import React from 'react';
import {Paper} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {productType} from "../../API/types/productsType";
import {useAppDispatch} from "../../redux/hooks";
import {productsSagaActions} from "../../redux/products/productSaga";
import {useNavigate} from "react-router-dom";

type props = {
    product: productType
    openProductModal: (product: productType) => void
}

export const AdminProductItem: React.FC<props> = ({product, openProductModal}: props) => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const deleteProduct = (id: number) => {
        dispatch(productsSagaActions.deleteProduct(id))
    }

    return (
        <Paper elevation={10} sx={{bgcolor: 'secondary.main', m: 1, p: 1, width: '100%'}}>
            <Grid container sx={{display: 'flex', alignItems: 'center'}}>
                <Grid sx={{cursor: 'pointer'}} xs={12} md={3} textAlign='center'
                      onClick={() => navigate(`/product/${product.id}`)}>
                    <img src={product.image} alt="" style={{maxWidth: '100%', maxHeight: 100}}/>
                </Grid>
                <Grid sx={{cursor: 'pointer'}} onClick={() => navigate(`/product/${product.id}`)} xs={12} md={5}
                      textAlign={{xs: 'center', md: 'start'}}>
                    <Typography fontSize={20}>
                        {product.title}
                    </Typography>
                </Grid>
                <Grid xs={12} md={2} textAlign='center'>
                    <Typography fontSize={20}>
                        Prise: {product.price} $
                    </Typography>
                </Grid>
                <Grid xs={12} md={1} textAlign='center' display='flex' flexDirection='column'>
                    <Button variant='contained' onClick={() => openProductModal(product)} color='info'
                            sx={{mb: 1}}>update</Button>
                    <Button variant='contained' onClick={() => deleteProduct(product.id)}
                            color='warning'>delete</Button>
                </Grid>
            </Grid>
        </Paper>
    );
};