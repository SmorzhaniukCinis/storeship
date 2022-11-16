import React from 'react';
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Unstable_Grid2";

export const CartProductDelete = () => {
    return (
        <Grid xs={12} md={1} textAlign='center' marginTop={{md: 2}}>
            <Button>
                <DeleteIcon sx={{color: 'secondary.dark', fontSize: 35}}/>
            </Button>
        </Grid>
    );
};

