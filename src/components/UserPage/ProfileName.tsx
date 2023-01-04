import React from 'react';
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import Grid from "@mui/material/Unstable_Grid2";
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";

type props = {
    userName?: string
    isEditing: boolean
    register: any
    setIsEditing: (isEditing: boolean) => void
}

export const ProfileName: React.FC<props> = ({userName, register, isEditing, setIsEditing}: props) => {

    return (
        <Grid xs={12}>
            {isEditing
                ? <Box pl='10%' textAlign='center' minHeight={60}>
                    <TextField sx={{width: '130px', mr: 2}} defaultValue={userName}
                               variant='standard' {...register('userName')}/>
                    <Tooltip title="EditProfile" sx={{position: 'relative', top: -10}}>
                        <Button size={'large'}
                                color='success'
                                type='submit'
                                variant='outlined'>
                            save
                        </Button>
                    </Tooltip>
                </Box>
                : <Box pl='10%' textAlign='center' minHeight={60}>
                    <span style={{paddingRight: 20, fontSize: 35}}>{userName}</span>
                    <Button sx={{position: 'relative', top: -10}} onClick={() => setIsEditing(true)}>
                        <EditIcon sx={{fontSize: 35, color: 'secondary.dark'}}/>
                    </Button>
                </Box>
            }
        </Grid>
    );
};

