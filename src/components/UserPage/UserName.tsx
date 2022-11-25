import React from 'react';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import s from '../../index.module.css'
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";

type props = {
    name: {
        firstname: string
        lastname: string
    } | undefined
    isEditing: boolean
    register: any
}

export const UserName: React.FC<props> = ({name, register, isEditing}: props) => {
    return (
        <Grid xs={12} sx={{borderBottom: '1px solid', borderColor: 'secondary.dark'}}>
            <Box fontSize={20}>
                <span className={s.sectionName}>firstName:</span>
                {isEditing
                    ?<TextField defaultValue={name?.firstname}  variant='standard' {...register('firstname')}size='small'/>
                    :<span>{name?.firstname}</span>
                }
            </Box>
            <Box fontSize={20}>
                <span className={s.sectionName}>lastName:</span>
                {isEditing
                    ?<TextField defaultValue={name?.lastname} variant='standard' {...register('lastname')}size='small'/>
                    :<span>{name?.lastname}</span>
                }
            </Box>
        </Grid>
    );
};

