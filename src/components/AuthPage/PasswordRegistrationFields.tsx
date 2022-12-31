import React from 'react';
import Box from "@mui/material/Box";
import {PasswordField} from "./PasswordField";

type props = {
    register: any
    errors: any
}

export const PasswordRegistrationFields: React.FC<props> = ({register, errors}: props) => {
    return (
        <Box width='100%'>
            <PasswordField error={errors.password?.message} label={'password'} register={register}
                           fieldName='password'/>
            <Box mt={1}>
                <PasswordField error={errors.passwordComparison?.message} label={'password comparison'}
                               register={register}
                               fieldName='passwordComparison'/>
            </Box>
        </Box>
    );
};

