import React from 'react';
import {Paper} from "@mui/material";
import testImg from '../../assets/jewelryBG.jpg'
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const AdminProductItem = () => {
    return (
        <Paper elevation={10} sx={{bgcolor: 'secondary.main', m: 1, p: 1, width: '100%'}}>
            <Grid container sx={{display: 'flex', alignItems: 'center'}}>
                <Grid xs={12} md={3} textAlign='center'>
                    <img src={testImg} alt="" style={{maxWidth: '100%', maxHeight: 100}}/>
                </Grid>
                <Grid xs={12} md={5} textAlign={{xs: 'center', md: 'start'}}>
                    <Typography fontSize={20}>
                        lsafjalsdjflsadjfsal af la fklaj la
                    </Typography>
                </Grid>
                <Grid xs={12} md={2} textAlign='center'>
                    <Typography fontSize={20}>
                        Prise: 100$
                    </Typography>
                </Grid>
                <Grid xs={12} md={1} textAlign='center' display='flex' flexDirection='column'>
                    <Button variant='contained' color='info' sx={{mb:1}}>update</Button>
                    <Button variant='contained' color='warning'>delete</Button>
                </Grid>
            </Grid>
        </Paper>
    );
};