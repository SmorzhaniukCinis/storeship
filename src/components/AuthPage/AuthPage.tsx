import React from 'react';
import {Paper} from "@mui/material";
import {SubmitHandler, useForm} from "react-hook-form";
import {AuthTitle} from "./AuthTitle";
import {UserNameField} from "./UserNameField";
import {PasswordField} from "./PasswordField";
import {useLocation} from "react-router-dom";
import {AuthRouterLink} from "./AuthRouterLink";
import {PasswordRegistrationFields} from "./PasswordRegistrationFields";
import Button from "@mui/material/Button";
import {appSaga, appSagaActions} from "../../redux/app/appSaga";
import {useAppDispatch} from "../../redux/hooks";

type FormData  = {
    password: string
    passwordComparison: string
    username: string;
};

export const AuthPage = () => {
    const dispatch = useAppDispatch()
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();
    const onSubmit = handleSubmit(({password, passwordComparison, username}) => {
        if (!passwordComparison) {
            dispatch(appSagaActions.authUser({
                password,
                username
            }))
        }
    });

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
        <form onSubmit={onSubmit} style={{paddingTop: 40}}>
            <Paper elevation={20} sx={formStyle}>
                <AuthTitle title={isAuthPath ? 'Authorization' : 'Registration'}/>
                <UserNameField error={errors.username?.message} register={register}/>
                {isAuthPath
                    ? <PasswordField error={errors.password?.message} fieldName='password' label={'password'} register={register}/>
                    : <PasswordRegistrationFields errors={errors} register={register}/>}
                <Button sx={{mt: 2, p: 1}} color='success' variant='outlined' type='submit'>Submit</Button>
                <AuthRouterLink isAuthPath={isAuthPath}/>
            </Paper>
        </form>
    );
};

