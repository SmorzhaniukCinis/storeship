import React from 'react';
import Typography from "@mui/material/Typography";
import {Select, SelectChangeEvent} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Unstable_Grid2";

type props = {
    paymentMethod: string
    changePaymentMethod: (event: SelectChangeEvent) => void
    register: any
}

export const PaymentMethod: React.FC<props> = ({paymentMethod, changePaymentMethod, register}: props) => {
    return (
        <Grid xs={12} display={'flex'} alignItems={'center'}>
            <Typography sx={{mr: 2}}>Chose payment method</Typography>
            <Select
                {...register("paymentMethod", {value: paymentMethod})}
                variant={'standard'}
                value={paymentMethod}
                onChange={changePaymentMethod}
            >
                <MenuItem value="cash">Cash</MenuItem>
                <MenuItem value="card">Card</MenuItem>
            </Select>
        </Grid>
    );
};

