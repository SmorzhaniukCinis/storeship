import React from 'react';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import s from '../../index.module.css'

type props = {
    name: {
        firstname: string
        lastname: string
    } | undefined
}

export const UserName: React.FC<props> = ({name}: props) => {
    return (
        <Grid xs={12} sx={{borderBottom: '1px solid', borderColor: 'secondary.dark'}}>
            <Typography fontSize={20}>
                <span className={s.sectionName}>firstName:</span>
                <span>{name?.firstname}</span>
            </Typography>
            <Typography fontSize={20}>
                <span className={s.sectionName}>lastName:</span>
                <span>{name?.lastname}</span>
            </Typography>
        </Grid>
    );
};

