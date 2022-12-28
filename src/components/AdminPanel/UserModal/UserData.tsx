import React from 'react';
import Box from "@mui/material/Box";
import {userType} from "../../../API/types/userTypes";
import {Typography} from "@mui/material";
import {useAppSelector} from "../../../redux/hooks";
import {usersSelectors} from "../../../redux/users/usersSelectors";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {md: '50%', xs: '90%'},
    bgcolor: 'background.paper',
    borderRadius: 4,
    boxShadow: 24,
    p: {md: 6, xs: 2},
}

export const UserData = () => {

    const user = useAppSelector(usersSelectors.selectCurrentUser)

    return (
        <Box sx={style}>
            <Typography variant='h5'>User data</Typography>
            <Box>
                <Typography component='span' sx={{opacity: '80%'}}>Username: </Typography>
                <Typography component='span' sx={{fontSize: 20}}>{user?.username}</Typography>
                <Typography component='span'> (
                    <Typography component='span' sx={{fontSize: 18, mr: 0.5}}>{user?.name.firstname}</Typography>
                    <Typography component='span' sx={{fontSize: 20}}>{user?.name.lastname}</Typography>
                    ) </Typography>
            </Box>
            <Box>
                <Typography component='span' sx={{opacity: '80%'}}>Gmail: </Typography>
                <Typography component='span' sx={{fontSize: 20}}>{user?.email}</Typography>
            </Box>
            <Box>
                <Typography component='span' sx={{opacity: '80%'}}>Phone: </Typography>
                <Typography component='span' sx={{fontSize: 20}}>{user?.phone}</Typography>
            </Box>
            <Box sx={{borderTop: '1px solid', mt: 1, pt: 1}}>
                <Typography variant='h5'>Address</Typography>
                <Box>
                    <Typography component='span' sx={{opacity: '80%'}}>City: </Typography>
                    <Typography component='span' sx={{fontSize: 20}}>{user?.address.city}</Typography>
                </Box>
                <Box>
                    <Typography component='span' sx={{opacity: '80%'}}>Street: </Typography>
                    <Typography component='span' sx={{fontSize: 20}}>{user?.address.street}, </Typography>
                    <Typography component='span' sx={{fontSize: 20}}>№{user?.address.number}</Typography>
                </Box>
            </Box>
        </Box>
    );
};

