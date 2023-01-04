import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import s from '../../index.module.css'
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {ErrorMessage} from "./ErrorMessage";

type props = {
    name: {
        firstname: string
        lastname: string
    } | undefined
    isEditing: boolean
    register: any
    errors: any
}

export const UserName: React.FC<props> = ({name, register, isEditing, errors}: props) => {
    return (
        <Grid xs={12} sx={{borderBottom: '1px solid', borderColor: 'secondary.dark'}}>
            <Box fontSize={20}>
                <span className={s.sectionName}>firstName:</span>
                {isEditing
                    ? <Box>
                        <TextField defaultValue={name?.firstname}
                                   variant='standard'
                                   {...register('firstname', {
                                       required: 'Field is required',
                                       minLength: {value: 2, message: 'Min length is two char'}
                                   })}
                                   size='small'/>
                        <ErrorMessage error={errors.firstname?.message}/>
                    </Box>
                    : <span>{name?.firstname}</span>
                }
            </Box>
            <Box fontSize={20}>
                <span className={s.sectionName}>lastName:</span>
                {isEditing
                    ? <Box>
                        <TextField defaultValue={name?.lastname}
                                   variant='standard'
                                   {...register('lastname', {
                                       required: 'Field is required',
                                       minLength: {value: 2, message: 'Min length is two char'}
                                   })}
                                   size='small'/>
                        <ErrorMessage error={errors.lastname?.message}/>
                    </Box>
                    : <span>{name?.lastname}</span>
                }
            </Box>
        </Grid>
    );
};

