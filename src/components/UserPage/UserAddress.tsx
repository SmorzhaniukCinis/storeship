import React from 'react';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import s from '../../index.module.css'
import {addressType} from "../../API/types/userTypes";
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";

type props = {
    address: addressType | undefined
    isEditing: boolean
    register: any
}

export const UserAddress: React.FC<props> = ({address, isEditing, register}: props) => {
    return (
        <Grid xs={12} sx={{borderBottom: '1px solid', borderColor: 'secondary.dark'}}>
            <Box fontSize={20}>
                <span className={s.sectionName}>city:</span>
                {isEditing
                    ? <TextField defaultValue={address?.city} variant='standard' {...register('city')} size='small'/>
                    : <span>{address?.city}</span>
                }
            </Box>
            <Box fontSize={20}>
                <span className={s.sectionName}>street:</span>
                {isEditing
                    ? <TextField defaultValue={address?.street}
                                 variant='standard' {...register('street')} size='small'/>
                    : <span>{address?.street}</span>
                }
            </Box>
            <Box fontSize={20}>
                <span className={s.sectionName}>number:</span>
                {isEditing
                    ? <TextField defaultValue={address?.number}
                                 variant='standard' {...register('number')} size='small'/>
                    : <span>{address?.number}</span>
                }
            </Box>
        </Grid>
    );
};

