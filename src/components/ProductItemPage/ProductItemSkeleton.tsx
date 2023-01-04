import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import {Paper, Skeleton} from "@mui/material";
import {ProductItemData} from "./ProductItemData";
import {ProductAddingFeedback} from "./ProductAddingFeedback";
import {ProductFeedback} from "./ProductFeedback";

export const ProductItemSkeleton = () => {
    return (
        <div style={{padding: '20px 0'}}>
            <Grid container rowSpacing={4} columnSpacing={{md: 2}}>
                <Grid xs={12} sm={5}>
                    <Skeleton variant="rectangular" width={'100%'} height='500px'/>
                </Grid>
                <Grid xs={12} sm={7}>
                    <Paper elevation={20} sx={{p: 3}}>
                        <Skeleton variant="rectangular" sx={{mb: 2}} width={'100%'} height={'100px'}/>
                        <Skeleton variant="rectangular" sx={{mb: 2}} width={'100%'} height={'100px'}/>
                        <Skeleton variant="rectangular" sx={{mb: 2}} width={'100%'} height={'200px'}/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

