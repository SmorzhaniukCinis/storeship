import React from 'react';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import s from '../../index.module.css'
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";

type props = {
    email: string | undefined
    phoneNumber: string | undefined
    isEditing: boolean
    register: any
}

export const UserContacts: React.FC<props> = ({email, phoneNumber, register, isEditing}: props) => {
    return (
        <Grid xs={12} sx={{borderBottom: '1px solid', borderColor: 'secondary.dark'}}>
            <Box fontSize={20}>
                <span className={s.sectionName}>email:</span>
                {isEditing
                    ? <TextField defaultValue={email} variant='standard' {...register('email')} size='small'/>
                    : <span>{email}</span>
                }
            </Box>
            <Box fontSize={20}>
                <span className={s.sectionName}>phone number:</span>
                {isEditing
                    ?
                    <TextField sx={{width: {xs: '130px'}}} defaultValue={phoneNumber}
                               variant='standard' {...register('phoneNumber')} size='small'/>
                    : <span>{phoneNumber}</span>
                }
            </Box>
        </Grid>
    );
};

