import React from 'react';
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";

export const Logo = () => {
    return (
        <Typography
            variant="h6"
            sx={{
                mr: 5,
                display: {xs: 'none', md: 'flex'},
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
            }}
        >
            <Link style={{
                textDecoration: 'none',
                color: 'inherit'
            }} to={'/'}>StoreShip</Link>
        </Typography>
    );
};

