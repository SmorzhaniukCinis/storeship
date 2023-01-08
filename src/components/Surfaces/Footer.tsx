import React from 'react';
import {Box} from "@mui/material";

const linkStyle = {
    color: '#fff',
    fontSize: 20,
    paddingBottom: 10,
    display: 'initial',
    width: 'auto'
}

export const Footer = () => {

    return (
        <Box sx={{bgcolor: 'primary.main', height: "15vh", pl: '15%', pr: '15%', pt: 2, alignItems: 'flex-start'}}>
            <a target='_blank' style={linkStyle} href='https://github.com/SmorzhaniukCinis' rel="noreferrer">GitHub</a>
            <br/>
            <a target='_blank' style={linkStyle} href='https://fakestoreapi.com' rel="noreferrer">API</a>
        </Box>
    );
};

