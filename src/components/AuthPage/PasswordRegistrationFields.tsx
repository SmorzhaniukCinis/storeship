import React from 'react';
import Box from "@mui/material/Box";
import {PasswordField} from "./PasswordField";

type props = {
    register: any
}

export const PasswordRegistrationFields:React.FC<props> = ({register}:props) => {
    return (
        <Box width='100%'>
            <PasswordField label={'password'} register={register}/>
            <PasswordField label={'password comparison'} register={register}/>
        </Box>
    );
};

