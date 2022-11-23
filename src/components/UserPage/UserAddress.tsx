import React from 'react';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import s from '../../index.module.css'
import {addressType} from "../../API/types/userTypes";

type props = {
    address: addressType | undefined
}

export const UserAddress: React.FC<props> = ({address}: props) => {
    return (
        <Grid xs={12} sx={{borderBottom: '1px solid', borderColor: 'secondary.dark'}}>
            <Typography fontSize={20}>
                <span className={s.sectionName}>city:</span>
                <span>{address?.city}</span>
            </Typography>
            <Typography fontSize={20}>
                <span className={s.sectionName}>street:</span>
                <span>{address?.street}</span>
            </Typography>
            <Typography fontSize={20}>
                <span className={s.sectionName}>number:</span>
                <span>{address?.number}</span>
            </Typography>
        </Grid>
    );
};

