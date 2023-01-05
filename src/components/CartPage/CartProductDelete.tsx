import React, {FC, memo} from 'react';
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Unstable_Grid2";
import {useAppDispatch} from "../../redux/hooks";
import {updateCart} from "../../redux/persist/persistSlise";

type props = {
    productId: number
}

export const CartProductDelete:FC<props> = memo(({productId}: props) => {

    const dispatch = useAppDispatch()

    const removeProduct = () => {
        dispatch(updateCart({quantity: 0, productId}))
    }

    return (
        <Grid xs={12} md={1} textAlign='center' marginTop={{md: 2}}>
            <Button onClick={removeProduct}>
                <DeleteIcon sx={{color: 'secondary.dark', fontSize: 35}}/>
            </Button>
        </Grid>
    )
})

