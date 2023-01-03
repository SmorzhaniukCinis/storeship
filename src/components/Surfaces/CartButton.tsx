import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {useAppSelector} from "../../redux/hooks";
import {cartSelectors} from "../../redux/carts/cartsSelectors";

type props = {
    openCart: () => void
}

export const CartButton:React.FC<props> = ({openCart}: props) => {

    const userCart = useAppSelector(cartSelectors.selectUserCart)
    const CounterStyle = {
        position: 'inherit',
        bottom: 1.1,
        left: 0.3,
        fontSize: 13,
        fontWeight: 'bold',
        color: '#343131',
        textAlign: 'center',
        verticalAlign: 'center',
    }
    const BoxStyle = {
        cursor: 'pointer',
        position: 'inherit',
        left: 30,
        bottom: 10,
        width: 17,
        height: 17,
        borderRadius: '50%',
        background: 'rgba(83,162,65, 0.9)'
    }


    return (
        <>
            {userCart.length
                ? <Box sx={BoxStyle} onClick={openCart}>
                    <Typography sx={CounterStyle}>{userCart.length}</Typography>
                </Box>
                : null}
            <ShoppingCartIcon onClick={openCart} sx={{mr: 2, fontSize: 30, cursor: 'pointer'}}/>
        </>
    );
};

