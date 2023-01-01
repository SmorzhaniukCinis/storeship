import React, {useEffect, useState} from 'react';
import {Paper} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import {usersSagaActions} from "../../redux/users/usersSaga";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {usersSelectors} from "../../redux/users/usersSelectors";
import {ProfileName} from "./ProfileName";
import {UserName} from "./UserName";
import {UserContacts} from "./UserContacts";
import {UserAddress} from "./UserAddress";
import {UserPageSkeleton} from "./UserPageSkeleton";
import {useForm} from "react-hook-form";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {appSelectors} from "../../redux/app/appSelectors";
import {DeleteUserModal} from "./DeleteUserModal";


export const UserPage = () => {

    const dispatch = useAppDispatch()
    const user = useAppSelector(appSelectors.selectCurrentUser)
    const [isEditing, setIsEditing] = useState(false)
    const {register, handleSubmit, formState: {errors}} = useForm();
    const isLoading = useAppSelector(usersSelectors.selectIsUsersLoading)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onSubmit = (data: any) => {
        setIsEditing(false)
        if (user) {
            dispatch(usersSagaActions.updateUser(user.id, {
                phone: data.phoneNumber,
                email: data.email,
                username: data.userName,
                name: {
                    firstname: data.firstname,
                    lastname: data.lastname
                },
                password: user.password,
                address: user.address
            }))
        }
    }

    useEffect(() => {
        if (user?.id) {
            dispatch(usersSagaActions.fetchUserById(user?.id))
        }
    }, [dispatch, user?.id])

    if (isLoading) return <UserPageSkeleton/>
    return (
        <Paper sx={{p: {md: '50px 200px', xs: 2}}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2} paddingBottom={{xs: 4}}>
                    <ProfileName setIsEditing={setIsEditing} register={register}
                                 userName={user?.username}
                                 isEditing={isEditing}/>
                    <UserName register={register} name={user?.name} isEditing={isEditing}/>
                    <UserContacts register={register} email={user?.email} phoneNumber={user?.phone}
                                  isEditing={isEditing}/>
                    <UserAddress register={register} address={user?.address} isEditing={isEditing}/>
                    {
                        isEditing &&
                        <Box alignItems='center' display='flex' pt={2}>
                            <Button onClick={handleOpen} color='warning' variant='outlined' size='large'>
                                delete account
                            </Button>
                            <DeleteUserModal open={open} handleClose={handleClose}/>
                        </Box>
                    }
                </Grid>
            </form>
        </Paper>
    );
};

