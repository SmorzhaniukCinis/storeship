import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";

const te = 'https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg'

export const CartProductsImg = () => {
    return (
        <Grid xs={12} md={3} textAlign='center'>
            <img style={{maxWidth: '100%', height: 80}} src={te} alt=""/>
        </Grid>
    );
};

