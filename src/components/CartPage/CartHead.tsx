import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import {useNavigate} from "react-router-dom";

export const CartHead = () => {

    const navigate = useNavigate()

    const goToPayment = () => {
        navigate('/payment')
    }

    return (
        <Box display={'flex'} justifyContent='space-between'>
            <Box sx={{pl: '2%', pt: '1%', display: 'flex'}}>
                <Typography variant={'h4'} marginRight={4}>Cart</Typography>
                <Button variant='contained' onClick={goToPayment} sx={{fontSize: 17}} color='success'>Pay</Button>
            </Box>
            <CloseIcon sx={{fontSize: 30, color: '#ad9c9c', cursor: 'pointer'}}/>
        </Box>
    );
};

