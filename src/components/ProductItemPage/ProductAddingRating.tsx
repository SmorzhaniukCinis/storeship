import React from 'react';
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {AddRating} from "./AddRating";

export const ProductAddingRating = () => {
    return (
        <div>
            <TextField
                sx={{width: '100%', mt: 2}}
                id="standard-multiline-flexible"
                label="Enter your feedback"
                multiline
                maxRows={4}
                variant="standard"
            />
            <Box display='flex' sx={{mt:1, mb:1}}>
                <Button color='success' variant='outlined'>add feedback</Button>
                <AddRating/>
            </Box>
        </div>
    );
};

