import React from 'react';
import Typography from "@mui/material/Typography";

type props = {
    title: string
}

export const AuthTitle:React.FC<props> = ({title}:props) => {
    return (
        <Typography sx={{mb: 3}} textAlign='center' fontSize={30}>{title}</Typography>
    );
};
