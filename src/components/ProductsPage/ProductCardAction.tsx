import React from 'react';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {CardActions} from "@mui/material";

type props = {
    price: number
}

export const ProductCardAction:React.FC<props> = ({price}: props) => {
    return (
        <CardActions sx={{display: 'flax', justifyContent: 'space-around',m:0, pb: 2}}>
            <Button variant='outlined' color='success' size="small">add to cart</Button>
            <Typography>Price: {price}$</Typography>
        </CardActions>
    );
};

