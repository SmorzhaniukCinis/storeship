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
import {UserName} from "./UserName";

export const UserPage = () => {

    const dispatch = useAppDispatch()
    const user = useAppSelector(usersSelectors.selectCurrentUser)

    useEffect(() => {
        dispatch(usersSagaActions.fetchUserById(1))
    }, [])

    const HrStyle = {
        borderBottom: '1px solid', borderColor: 'secondary.dark'
    }
    const sectionName = {
        opacity: 0.7,
        paddingRight: 5
    }

    return (
        <Paper sx={{p: {md: '50px 200px', xs: 2}}}>
            <Grid container spacing={2}>
                <UserName userName={user?.username}/>
                <Grid xs={12} sx={HrStyle}>
                    <Typography>
                        <span style={sectionName}>
                            firstName:
                        </span>
                        <span>
                            {user?.name.firstname}
                        </span>
                    </Typography>
                    <Typography>
                        <span style={sectionName}>
                            lastName:
                        </span>
                        <span>
                             {user?.name.lastname}
                        </span>
                    </Typography>
                </Grid>
                <Grid xs={12} sx={HrStyle}>
                    <Typography>
                        <span style={sectionName}>
                            email:
                        </span>
                        <span>
                             {user?.email}
                        </span>
                    </Typography>
                    <Typography>
                        <span style={sectionName}>
                            phone number:
                        </span>
                        <span>
                             {user?.phone}
                        </span>
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

