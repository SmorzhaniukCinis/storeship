import React from 'react';
import {Paper, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const frontCardStyle = {
    maxWidth: 350,
    height: 200,
    bgcolor: 'secondary.main',
    position: 'relative',
    bottom: 200
}
const backCardStyle = {
    maxWidth: 350,
    height: 200,
    bgcolor: 'secondary.main',
    position: 'relative',
    left: {md: 70, xs: 0},
    top: {md: 20, xs: 80}
}


export const AddCard = () => {
    return (
        <div>
            <Paper elevation={12} sx={backCardStyle}>
                <TextField
                    sx={{float: 'right', width: 35, mr: '20px', mt: '130px', display: 'flex', alignItems: 'center'}}
                    label='CVV' variant="standard"/>
            </Paper>
            <Paper elevation={12} sx={frontCardStyle}>
                <Box sx={{p: 6, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <TextField label='CARD NUMBER' sx={{maxWidth: 165}} variant="standard"/>
                    <Box display={'flex'}>
                        <Typography mt={1.4} mr={1}>
                            Date:
                        </Typography>
                        <TextField sx={{maxWidth: 22, pt: 1, mr: 0.5}} variant="standard"/>
                        <span style={{fontSize: 25, marginTop: 6}}>/</span>
                        <TextField sx={{maxWidth: 22, pt: 1, ml: 0.4}} variant="standard"/>
                    </Box>
                </Box>
            </Paper>
        </div>
    );
};

