import React, {FC} from 'react';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

type props = {
    quantity: number
    price: number
}

export const TotalPrise:FC<props> = ({quantity, price}:props) => {
    return (
        <Grid xs={12} md={3} sx={{textAlign: 'center'}}>
            <Typography fontSize={25}>
                Quantity: {quantity}
            </Typography>
            <Typography fontSize={25}>
                Price:{(price * quantity).toFixed(2)}$
            </Typography>
        </Grid>
    );
};

