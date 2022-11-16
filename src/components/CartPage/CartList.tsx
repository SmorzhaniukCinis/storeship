import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import {TextField} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import {CartProductItem} from "./CartProductItem";




const ProductsList = {
    m: '4% 0 2% 2%',
    height: 470,
    overflowY: 'auto',
    overflowX: 'hidden',
    maxHeight: '63vh',
    '&::-webkit-scrollbar': {
        width: '3px',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'primary.dark',
        borderRadius: '2px',
    }
}

const test = [1, 2, 3 , 4, 5]

export const CartList = () => {
    return (
        <Box sx={ProductsList}>
            {test.map(product => <CartProductItem key={product}/>)}
        </Box>
    );
};
