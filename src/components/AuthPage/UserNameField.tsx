import React from 'react';
import {TextField, Typography} from "@mui/material";


type props = {
    register: any
    error: string | undefined
}

export const UserNameField: React.FC<props> = ({register, error}: props) => {
    return (
        <>
            {<Typography sx={{mb: 1, color: '#e84141'}}>{error}</Typography>}
            <TextField color={error ? "error" : null} {...register("username", {required: 'field is required'})} sx={{mb: '20px'}} id="outlined-basic"
                       label="User name" variant="outlined"/>
        </>
    );
};

