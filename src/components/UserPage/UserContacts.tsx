import React from 'react';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import s from '../../index.module.css'

type props = {
    email: string | undefined
    phoneNumber: string | undefined
}

export const UserContacts: React.FC<props> = ({email, phoneNumber}: props) => {
    return (
        <Grid xs={12} sx={{borderBottom: '1px solid', borderColor: 'secondary.dark'}}>
            <Typography fontSize={20}>
                <span className={s.sectionName}>email:</span>
                <span>{email}</span>
            </Typography>
            <Typography fontSize={20}>
                <span className={s.sectionName}>phone number:</span>
                <span>{phoneNumber}</span>
            </Typography>
        </Grid>
    );
};

