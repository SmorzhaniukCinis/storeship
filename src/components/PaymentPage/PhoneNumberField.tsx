import React from 'react';
import {InputAdornment, TextField} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

type props = {
    register: any
    errors: any
}

export const PhoneNumberField: React.FC<props> = ({errors, register}: props) => {
    return (
        <Grid xs={12} md={6}>
            <TextField
                variant="outlined"
                fullWidth={true}
                type="number"
                label={errors.phoneNumber?.message ? String(errors.phoneNumber?.message) : "Phone number*"}
                color={errors.phoneNumber && 'error'}
                InputProps={{
                    startAdornment: <InputAdornment position="start">+380</InputAdornment>,
                }}
                {...register("phoneNumber", {
                    required: true,
                    minLength: {value: 9, message: "the number is too short"},
                    maxLength: {value: 9, message: "the number is too long"}
                })}
            />
        </Grid>
    );
};