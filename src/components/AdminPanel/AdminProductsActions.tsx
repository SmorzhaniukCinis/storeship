import React from 'react';
import Button from "@mui/material/Button";
import {FormControl, InputLabel, OutlinedInput} from "@mui/material";
import Box from "@mui/material/Box";
import NorthIcon from "@mui/icons-material/North";

export const AdminProductsActions = () => {
    return (
        <Box sx={{width: '100%', display: {xs: 'block', md: 'flex'}, justifyContent: 'space-between'}}>
            <FormControl sx={{m: '0 10px 10px 10px', width: {xs: 200, md: 400}}}>
                <InputLabel htmlFor="outlined-adornment-amount">
                    <NorthIcon sx={{mr: 1}}/>
                    <span style={{position: 'relative', bottom: 6}}>search product</span>
                </InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    label='________________'
                />
            </FormControl>

            <Button sx={{mb: 1, height: 55}} size='large' variant='contained' color={'success'}>add product</Button>
        </Box>
    );
};

