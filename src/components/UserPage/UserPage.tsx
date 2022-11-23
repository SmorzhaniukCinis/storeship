import React, {useEffect} from 'react';
import {Paper} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import {usersSagaActions} from "../../redux/users/usersSaga";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {usersSelectors} from "../../redux/users/usersSelectors";
import Typography from "@mui/material/Typography";
import EditIcon from '@mui/icons-material/Edit';
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import {ProfileName} from "./ProfileName";
import {UserName} from "./UserName";
import {UserContacts} from "./UserContacts";
import {UserAddress} from "./UserAddress";


export const UserPage = () => {

    const dispatch = useAppDispatch()
    const user = useAppSelector(usersSelectors.selectCurrentUser)

    useEffect(() => {
        dispatch(usersSagaActions.fetchUserById(1))
    }, [])



    return (
        <Paper sx={{p: {md: '50px 200px', xs: 2}}}>
            <Grid container spacing={2} paddingBottom={{xs: 4}}>
                <ProfileName userName={user?.username}/>
                <UserName name={user?.name}/>
                <UserContacts email={user?.email} phoneNumber={user?.phone}/>
                <UserAddress address={user?.address}/>
            </Grid>
        </Paper>
    );
};

