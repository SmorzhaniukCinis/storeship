import React from 'react';
import Typography from "@mui/material/Typography";
import {InputAdornment, TextField} from "@mui/material";
import Box from "@mui/material/Box";

type props = {
    errors: any
    register: any
    defaultValue?: string
}

export const PriseField:React.FC<props> = ({errors, register, defaultValue}:props) => {
    debugger
    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography fontSize={14} sx={{pb: 1}} color='error'>{errors.price?.message}</Typography>
            <TextField
                onKeyPress={(event) => {
                    if (!/[0-9.]/.test(event.key)) {
                        event.preventDefault();
                    }
                }}
                label='product price'
                color={errors.price && 'error'}
                sx={{height: 70}}
                {...register("price", {required: "Product price is required field"})}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            $
                        </InputAdornment>),
                }}/>
        </Box>
    );
};
