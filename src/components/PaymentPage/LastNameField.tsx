import React from 'react';
import {TextField} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

type props = {
    register: any
    errors: any
}

const LastNameField = ({errors, register}: props) => {
    return (
        <Grid xs={12} md={6}>
            <TextField
                color={errors.lastName && 'error'}
                fullWidth={true}
                variant="outlined"
                label="Last Name*"
                {...register("lastName", {
                    required: true,
                })}
            />
        </Grid>
    );
};

export default LastNameField;