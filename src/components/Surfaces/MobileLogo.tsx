import React from 'react';
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";

export const MobileLogo = () => {
    return (
        <Typography
            variant="h6"
            noWrap
            sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
            }}
        >
            <Link style={{
                textDecoration: 'none',
                color: 'inherit'
            }} to={'/'}>StoreShip</Link>
        </Typography>
    );
};
