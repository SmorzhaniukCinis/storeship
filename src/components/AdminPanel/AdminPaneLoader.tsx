import React from 'react';
import Box from "@mui/material/Box";
import {CircularProgress} from "@mui/material";

export const AdminPaneLoader = () => {
    return (
        <Box sx={{ display: 'relative', pt: '100px', left: '50%' }}>
            <CircularProgress size={100} />
        </Box>
    );
};

