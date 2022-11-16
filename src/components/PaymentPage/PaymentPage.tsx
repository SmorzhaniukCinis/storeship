import React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import {Paper} from "@mui/material";

export const PaymentPage = () => {
    return (
        <Paper sx={{width: '80%', margin: '0 auto'}}>
            <Grid container>
                <Grid xs={12} md={6}>name</Grid>
                <Grid xs={12} md={6}>lastName</Grid>
                <Grid xs={12}>town</Grid>
                <Grid xs={12}>post</Grid>
                <Grid xs={12}>payment method</Grid>
                <Grid xs={12}>comment</Grid>
                <Grid xs={12}>button</Grid>
            </Grid>
        </Paper>
    );
};

