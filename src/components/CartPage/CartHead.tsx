import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks";
import {persistSelectors} from "../../redux/persist/persistSelectors";

type props = {
    closeCart: () => void
}

export const CartHead = ({closeCart}: props) => {

    const navigate = useNavigate()
    const cart = useAppSelector(persistSelectors.selectCart)

    const goToPayment = () => {
        closeCart()
        navigate('/payment')
    }

    return (
        <Box display={'flex'} justifyContent='space-between'>
            <Box sx={{pl: '2%', pt: '1%', display: 'flex'}}>
                <Typography variant={'h4'} marginRight={4}>Cart</Typography>
                {cart.length
                    ? <Button variant='contained' onClick={goToPayment} sx={{fontSize: 17}} color='success'>Pay</Button>
                    : null
                }
            </Box>
            <CloseIcon onClick={closeCart} sx={{fontSize: 30, color: '#ad9c9c', cursor: 'pointer'}}/>
        </Box>
    );
};

