import React from 'react';
import Typography from "@mui/material/Typography";
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";

type props = {
    errors: any
    register: any
    defaultValue?: string
}

export const DescriptionField:React.FC<props> = ({errors, register, defaultValue}:props) => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography fontSize={14} sx={{pb: 1}} color='error'>{errors.description?.message}</Typography>
            <TextField
                defaultValue={defaultValue}
                color={errors.description && 'error'}
                label='Product description'
                sx={{height: 70}}
                {...register("description", {required: "Product description is required field"})} />
        </Box>
    );
};
