import React from 'react';
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import Grid from "@mui/material/Unstable_Grid2";
import {useForm} from "react-hook-form";
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";

type props = {
    userName?: string
    isEditing: boolean
    register: any
    setIsEditing: (isEditing: boolean) => void
}

export const ProfileName: React.FC<props> = ({userName = 'dsffsd', register, isEditing, setIsEditing}: props) => {

    return (
        <Grid xs={12}>
            <Box pl='10%' textAlign='center' minHeight={60}>
                {isEditing
                    ? <TextField sx={{width: '130px', mr: 2}} defaultValue={userName} variant='standard' {...register('userName')}/>
                    : <span style={{paddingRight: 20, fontSize: 35}}>{userName}</span>
                }

                {isEditing
                    ? <Tooltip title="EditProfile" sx={{position: 'relative', top: -10}}>
                        <Button size={'large'}
                                color='success'
                                variant='outlined'
                                onClick={() => setIsEditing(false)}>
                            save
                        </Button>
                    </Tooltip>
                    : <Button sx={{position: 'relative', top: -10}} onClick={() => setIsEditing(true)}>
                        <EditIcon sx={{fontSize: 35, color: 'secondary.dark'}}/>
                    </Button>
                }

            </Box>
        </Grid>
    );
};

