import React from 'react';
import Typography from "@mui/material/Typography";
import WarningIcon from '@mui/icons-material/Warning';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

type props = {
    title: string
}

export const AuthTitle: React.FC<props> = ({title}: props) => {
    return (
        <Typography sx={{mb: 3}} textAlign='center' fontSize={30}>
            {title}
            {title === 'Registration'
                && <Tooltip title="API don't allow registration (if you try you will auth like existing user)!">
                    <IconButton>
                        <WarningIcon sx={{fontSize: 30, color: '#f87414'}}/>
                    </IconButton>
                </Tooltip>}

        </Typography>
    );
};
