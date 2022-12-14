import React from 'react';
import Typography from "@mui/material/Typography";
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";

type props = {
    errors: any
    register: any
    defaultValue?: string
}

export const TitleField:React.FC<props> = ({errors, register, defaultValue}:props) => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography fontSize={14} sx={{pb: 1}} color='error'>{errors.title?.message}</Typography>
            <TextField defaultValue={defaultValue} color={errors.title && 'error'} label='Product title' sx={{height: 70}}
                       {...register("title", {required: 'Product Title is required field'})} />
        </Box>
    );
};
