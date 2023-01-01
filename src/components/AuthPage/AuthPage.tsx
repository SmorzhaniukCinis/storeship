import React, {useEffect} from 'react';
import {Paper, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import {AuthTitle} from "./AuthTitle";
import {UserNameField} from "./UserNameField";
import {PasswordField} from "./PasswordField";
import {useLocation, useNavigate} from "react-router-dom";
import {AuthRouterLink} from "./AuthRouterLink";
import {PasswordRegistrationFields} from "./PasswordRegistrationFields";
import Button from "@mui/material/Button";
import {appSagaActions} from "../../redux/app/appSaga";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {appSelectors} from "../../redux/app/appSelectors";
import ErrorIcon from '@mui/icons-material/Error';
import {NewUserModal} from "./NewUserModal";
import {throwSomeError} from "../../redux/app/appSlise";


export type FormData = {
    password: string
    passwordComparison: string
    username: string;
};

const formStyle = {
    p: {xs: 2, md: 7},
    m: {xs: 0, md: '0 25%'},
    display: 'flex',
    flexDirection: 'column',
    width: {xs: '100%', md: '50%'}
}

export const AuthPage = () => {

    const {pathname} = useLocation();
    const isAuthPath = pathname === '/auth'
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const errorMessage = useAppSelector(appSelectors.selectErrorMessage)
    const currentUser = useAppSelector(appSelectors.selectCurrentUser)
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        defaultValues: {
            username: 'johnd',
            password: 'm38rmF$',
            passwordComparison: 'm38rmF$'
        }
    })
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const openModal = (data: FormData) => {
        setIsModalOpen(true);
    }
    const closeModal = () => setIsModalOpen(false);

    const onSubmit = handleSubmit(({password, passwordComparison, username}) => {
        if (isAuthPath) {
            dispatch(appSagaActions.authUser({
                password,
                username
            }))
        } else {
            if(password === passwordComparison && !isAuthPath) {
                openModal({
                    password,
                    passwordComparison,
                    username
                })
            } else {
                dispatch(throwSomeError('Password must be identical'))
                setTimeout(() => {
                    dispatch(throwSomeError(''))
                }, 5000)
            }

        }
    });
    
    useEffect(() => {
        if (currentUser) {
            navigate(`/profile/${currentUser.id}`)
        }
    }, [currentUser, navigate])


    return (
        <form onSubmit={onSubmit} style={{paddingTop: 40}}>
            <Paper elevation={20} sx={formStyle}>
                <AuthTitle title={isAuthPath ? 'Authorization' : 'Registration'}/>
                <UserNameField error={errors.username?.message} register={register}/>
                {isAuthPath
                    ? <PasswordField error={errors.password?.message} fieldName='password' label={'password'}
                                     register={register}/>
                    : <PasswordRegistrationFields errors={errors} register={register}/>}
                {<Typography component='span' sx={{color: '#e84141', mt: 2}}>
                    {errorMessage &&
                        <ErrorIcon sx={{color: '#e84141', fontSize: 18, position: 'relative', top: 3, mr: 0.5}}/>}
                    {errorMessage}
                </Typography>}
                <Button sx={{p: 1}} color='success' variant='outlined' type='submit'>Submit</Button>
                <AuthRouterLink isAuthPath={isAuthPath}/>
            </Paper>
            <NewUserModal closeModal={closeModal} isModalOpen={isModalOpen}/>
        </form>
    );
};

