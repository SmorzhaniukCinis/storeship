import React from 'react';
import {TextField} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

type props = {
    register: any
    errors: any
}

const emailPattern = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu


export const EmailField = ({errors, register}: props) => {
    return (
        <Grid xs={12} md={6}>
            <TextField
                color={errors.email && 'error'}
                type='email'
                fullWidth={true}
                label={errors.email?.message ? String(errors.email?.message) : "Email*"}
                {...register("email", {
                    required: true,
                    pattern: {value: emailPattern, message: "The email entered is incorrect"}
                })}
                variant="outlined"/>
        </Grid>
    );
};

