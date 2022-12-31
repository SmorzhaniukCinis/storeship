import React from 'react';
import {TextField, Typography} from "@mui/material";

type props = {
    error: any
    register: any
    isRequired: boolean
    label: string
    name: string
    type?: string
}

export const NewUserField:React.FC<props> = ({error, register, isRequired, name, label, type}:props) => {
    return (
        <>
            <TextField sx={{pb: 0.5}} color={error ? 'error' : 'primary'} size='small'
                       type={type} {...register(name, {required: isRequired && 'Field is required'})} label={label}
                       variant="outlined"/>
            <Typography sx={{color: '#e84141', fontSize: 13, mb: 1}}>{error?.message}</Typography>
        </>
    );
};

