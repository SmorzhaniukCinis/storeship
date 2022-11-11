import React from 'react';
import {Box, Paper, useTheme} from "@mui/material";

export const Footer = () => {

    const theme = useTheme()
    console.log(theme)
    return (
        <Box sx={{bgcolor: 'primary.main', height: "15vh"}}>
            footer
        </Box>
    );
};

