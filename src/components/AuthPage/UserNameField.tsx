import React from 'react';
import {TextField} from "@mui/material";


type props = {
    register: any
}

export const UserNameField:React.FC<props> = ({register}:props) => {
    return (
        <TextField {...register("password")} sx={{mb: '20px'}} id="outlined-basic" label="User name" variant="outlined"/>
    );
};

