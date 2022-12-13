import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import {Paper} from "@mui/material";

export const AdminUserItem = () => {
    return (
        <Paper elevation={10} sx={{display: 'flex', p: '16px 50px', mb: 1, cursor: 'pointer'}}>
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
    );
};

