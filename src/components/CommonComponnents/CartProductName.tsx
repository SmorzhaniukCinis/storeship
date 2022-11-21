import React from 'react';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

export const CartProductName = () => {
    return (
        <Grid overflow='hidden' textAlign={{xs: 'center', md: 'start'}} xs={12} md={5}>
            <Typography fontSize={28} height={{sx: '300px', md: 80}} textOverflow='hidden'>
                Mens Cotton Jacket
            </Typography>
        </Grid>
    );
};

