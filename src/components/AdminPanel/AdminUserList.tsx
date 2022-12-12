import React from 'react';
import Box from "@mui/material/Box";
import {Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

export const AdminUserList = () => {
    return (
        <Box sx={{p: {md: '0 10%', xs: 0}}}>
            <Paper elevation={10} sx={{display: 'flex', p: '16px 50px'}}>
                <Grid container columns={12} width='100%'>
                    <Grid md={4} xs={12} display='flex' justifyContent={{md: 'normal', xs: 'space-around'}}>
                        <Typography sx={{fontSize: 30,}}>
                            username
                        </Typography>
                    </Grid>
                    <Grid md={8}
                          xs={12}
                          display='flex'
                          alignItems='center'
                          justifyContent={{md: 'normal', xs: 'space-around'}}
                    >
                        <Typography sx={{fontSize: {md: 25, xs: 18}, opacity: '70%', mr: {md: 2, xs: 0}}}>
                            name
                        </Typography>
                        <Typography sx={{fontSize: {md: 25, xs: 18}, opacity: '70%'}}>
                            lastname
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

