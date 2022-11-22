import React from 'react';
import {Paper} from "@mui/material";
import {useForm} from "react-hook-form";
import {AuthTitle} from "./AuthTitle";
import {UserNameField} from "./UserNameField";
import {PasswordField} from "./PasswordField";
import {useLocation} from "react-router-dom";
import {AuthRouterLink} from "./AuthRouterLink";
import {PasswordRegistrationFields} from "./PasswordRegistrationFields";

export const AuthPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data: any) => console.log(data);

    const formStyle = {
        p: {xs: 2, md: 7},
        m: {xs: 0, md: '0 25%'},
        display: 'flex',
        flexDirection: 'column',
        width: {xs: '100%', md: '50%'}
    }
    const {pathname} = useLocation();
    const isAuthPath = pathname === '/auth'


    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{paddingTop: 80}}>
            <Paper elevation={20} sx={formStyle}>
                <AuthTitle title={isAuthPath ? 'Authorization' : 'Registration'}/>
                <UserNameField register={register}/>
                {isAuthPath
                    ? <PasswordField label={'password'} register={register}/>
                    : <PasswordRegistrationFields register={register}/>}
                <AuthRouterLink isAuthPath={isAuthPath}/>
            </Paper>
        </form>
    );
};

