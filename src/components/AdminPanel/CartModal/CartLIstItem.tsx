import React from 'react';
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import {productType} from "../../../API/types/productsType";


type props = {
    handleToggle: (value: number) => () => void
    labelId: string
    quantity: string | number
    product: productType
    checked: number[]
}

export const CartLIstItem:React.FC<props> = ({handleToggle, labelId, quantity, product, checked}:props) => {
    return (
        <ListItemButton role={undefined} onClick={handleToggle(product.id)} dense>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={checked.indexOf(product.id) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{'aria-labelledby': labelId}}
                />
            </ListItemIcon>
            <ListItemText id={labelId}>
                <Box display='flex' justifyContent='space-between'
                     flexDirection={{md: 'row', xs: 'column'}} alignItems='center'>
                    <Typography width={{md: '70%', xs: '100%'}}>{product.title}</Typography>
                    <Box width={{md: '30%', xs: '100%'}} textAlign='center'>
                        <Typography component='span' fontWeight='bold'>
                            Quantity: {quantity}
                        </Typography>
                        <Typography fontWeight='bold'>
                            Total: {product.price*Number(quantity)} $
                        </Typography>
                    </Box>

                </Box>
            </ListItemText>
        </ListItemButton>
    );
};

