import React from 'react';
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import Grid from "@mui/material/Unstable_Grid2";

type props = {
    userName?: string
}

export const UserName:React.FC<props> = ({userName}: props) => {
    return (
        <Grid xs={12}>
            <Typography pl='10%' variant='h3' textAlign='center'>
                       <span style={{paddingRight: 20}}>
                           {userName}
                       </span>
                <Tooltip title="EditProfile">
                    <Button>
                        <EditIcon sx={{fontSize: 35, color: 'secondary.dark'}}/>
                    </Button>
                </Tooltip>
            </Typography>
        </Grid>
    );
};

