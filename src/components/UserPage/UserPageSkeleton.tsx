import React from 'react';
import {Paper, Skeleton} from "@mui/material";

export const UserPageSkeleton = () => {
    return (
        <Paper sx={{p: {md: '50px 200px', xs: 2}}}>
            <Skeleton sx={{margin: '0 auto', mb: 2}} variant="rounded" width={210} height={60} />
            <Skeleton variant="rounded" width='100%' height={320} />
        </Paper>
    );
};

