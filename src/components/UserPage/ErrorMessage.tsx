import React from 'react';
import Typography from "@mui/material/Typography";

type props = {
    error: string | null
}

export const ErrorMessage = ({error}:props) => {
    return (
        <Typography sx={{fontSize: 12, color: '#ea2424'}}>
            {error}
        </Typography>
    );
};

