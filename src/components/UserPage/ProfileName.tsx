import React from 'react';
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import Grid from "@mui/material/Unstable_Grid2";
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {ErrorMessage} from "./ErrorMessage";

type props = {
    username?: string
    isEditing: boolean
    register: any
    setIsEditing: (isEditing: boolean) => void
    errors: any
}

export const ProfileName: React.FC<props> = ({username, register, isEditing, setIsEditing, errors}: props) => {

    return (
        <Grid xs={12}>
            {isEditing
                ? <Box pl='10%' textAlign='center' minHeight={60}>
                    <Box>
                        <TextField sx={{width: '130px', mr: 2}}
                                   defaultValue={username}
                                   variant='standard'
                                   {...register('username', {
                                       required: 'Name is required field',
                                       minLength: {
                                           value: 3,
                                           message: 'three char is min length of username'
                                       }
                                   })}/>
                        <Tooltip title="EditProfile" sx={{position: 'relative', top: -10}}>
                            <Button size={'large'}
                                    color='success'
                                    type='submit'
                                    variant='outlined'>
                                save
                            </Button>
                        </Tooltip>
                    </Box>
                    <ErrorMessage error={errors.username?.message}/>
                </Box>
                : <Box pl='10%' textAlign='center' minHeight={60}>
                    <span style={{paddingRight: 20, fontSize: 35}}>{username}</span>
                    <Button sx={{position: 'relative', top: -10}} onClick={() => setIsEditing(true)}>
                        <EditIcon sx={{fontSize: 35, color: 'secondary.dark'}}/>
                    </Button>
                </Box>
            }
        </Grid>
    );
};

