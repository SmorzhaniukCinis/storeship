import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";

type props = {
    image: string
}

export const CartProductsImg:React.FC<props> = ({image}:props) => {
    return (
        <Grid xs={12} md={3} textAlign='center'>
            <img style={{maxWidth: '100%', height: 80}} src={image} alt=""/>
        </Grid>
    );
};

