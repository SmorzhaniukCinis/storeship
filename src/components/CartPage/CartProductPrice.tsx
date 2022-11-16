import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import {TextField} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import Grid from "@mui/material/Unstable_Grid2";

export const CartProductPrice = () => {
    return (
        <Grid xs={12} md={3} textAlign='center'>
            <Typography fontSize={20}>
                Prise: 133$
            </Typography>
            <Box>
                <Button sx={{p: 1.1, borderRadius: 1}}>
                    <AddIcon sx={{color: 'secondary.dark'}}/>
                </Button>
                <TextField type={'number'} size='small' sx={{width: 60, m: '0 5px'}}
                           variant="outlined"/>
                <Button sx={{p: 1.1, borderRadius: 1}}>
                    <RemoveIcon sx={{color: 'secondary.dark'}}/>
                </Button>
            </Box>
        </Grid>
    );
};

