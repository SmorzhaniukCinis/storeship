import React from 'react';
import {TextField} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

type props = {
    register: any
    errors: any
}

export const FirstNameField = ({errors, register}: props) => {
    return (
        <Grid xs={12} md={6}>
            <TextField
                variant="outlined"
                color={errors.firstName && 'error'}
                fullWidth={true}
                label="First Name*"
                {...register("firstName", {
                    required: true,
                })}
            />
        </Grid>
    );
};

