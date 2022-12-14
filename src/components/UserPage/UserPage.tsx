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
import {DeleteUserModal} from "./DeleteUserModal";
import {persistSelectors} from "../../redux/persist/persistSelectors";

type formData = {
    username: string
    firstname: string
    lastname: string
    email: string
    phoneNumber: string
    city: string
    street: string
    number: string
}

export const UserPage = () => {

    const dispatch = useAppDispatch()
    const user = useAppSelector(persistSelectors.selectCurrentUser)
    const [isEditing, setIsEditing] = useState(false)
    const {register, handleSubmit, formState: {errors}} = useForm<formData>()
    const isLoading = useAppSelector(usersSelectors.selectIsUsersLoading)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onSubmit = handleSubmit((data) => {
            setIsEditing(false)
            if (user) {
                dispatch(usersSagaActions.updateUser(user.id, {
                    phone: data.phoneNumber,
                    email: data.email,
                    username: data.username,
                    name: {
                        firstname: data.firstname,
                        lastname: data.lastname
                    },
                    password: user.password,
                    address: user.address
                }))
            }
        }
    )

    useEffect(() => {
        if (user?.id) {
            dispatch(usersSagaActions.fetchUserById(user?.id))
        }
    }, [dispatch, user?.id])

    if (isLoading) return <UserPageSkeleton/>
    return (
        <Paper sx={{p: {md: '50px 200px', xs: 2}}}>
            <form onSubmit={onSubmit}>
                <Grid container spacing={2} paddingBottom={{xs: 4}}>
                    <ProfileName setIsEditing={setIsEditing} register={register}
                                 username={user?.username} errors={errors}
                                 isEditing={isEditing}/>
                    <UserName errors={errors} register={register} name={user?.name} isEditing={isEditing}/>
                    <UserContacts register={register} email={user?.email} phoneNumber={user?.phone}
                                  isEditing={isEditing}/>
                    <UserAddress register={register} address={user?.address} isEditing={isEditing}/>
                    {isEditing &&
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

