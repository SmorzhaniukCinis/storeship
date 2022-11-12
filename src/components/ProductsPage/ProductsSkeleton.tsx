import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import {Skeleton} from "@mui/material";
import Box from "@mui/material/Box";

const skeletonItem = [1, 2, 3, 4]

export const ProductsSkeleton = () => {
    return (
        <Box sx={{m: 2}}>
            <Grid container rowSpacing={4} columnSpacing={{md: 2}}>
                {
                    skeletonItem.map(item =>
                        <Grid key={item} xs={12} sm={3}>
                            <Skeleton variant="rounded" width={265} height={500}/>
                        </Grid>)
                }
            </Grid>
        </Box>
    );
};

