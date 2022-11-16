import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

export const CartHead = () => {
    return (
        <Box display={'flex'} justifyContent='space-between'>
            <Box sx={{pl: '2%', pt: '1%', display: 'flex'}}>
                <Typography variant={'h4'} marginRight={4}>Cart</Typography>
                <Button variant='contained' sx={{fontSize: 17}} color='success'>Pay</Button>
            </Box>
            <CloseIcon sx={{fontSize: 30, color: '#ad9c9c', cursor: 'pointer'}}/>
        </Box>
    );
};

