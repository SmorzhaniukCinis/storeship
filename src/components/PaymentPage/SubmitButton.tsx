import React from 'react';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";

export const SubmitButton = () => {
    return (
        <Grid xs={12} pt={5} textAlign={{xs: 'center'}} pb={{xs: 5, md: 0}}>
            <Button color={'success'} size='large' type='submit' variant='contained'>
                Confirm order
            </Button>
        </Grid>
    );
};

