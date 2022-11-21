import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

export const TotalPrise = () => {
    return (
        <Grid xs={12} md={3} sx={{textAlign: 'center'}}>
            <Typography fontSize={25}>
                Count: 2
            </Typography>
            <Typography fontSize={25}>
                Prise:1200$
            </Typography>
        </Grid>
    );
};

