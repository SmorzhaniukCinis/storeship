import React from 'react';
import {Paper, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

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

type props = {
    register: any
    errors: any
}

export const AddCard: React.FC<props> = ({register, errors}: props) => {

    return (
        <Grid xs={12} sx={{maxHeight: {md: 260, xs: 300}}}>
            <div>
                <Paper elevation={12} sx={backCardStyle}>
                    <TextField
                        type="number"
                        {...register("CVVNumber", {required: true, valueAsNumber: true})}
                        sx={{float: 'right', width: 35, mr: '20px', mt: '130px', display: 'flex', alignItems: 'center'}}
                        label='CVV' variant="standard"/>
                </Paper>
                <Paper elevation={12} sx={frontCardStyle}>
                    <Box sx={{p: 6, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <TextField
                            type="number"
                            color={errors.cardNumber && 'error'}
                            sx={{maxWidth: 165}} variant="standard"
                            label={errors.cardNumber?.message ? String(errors.cardNumber?.message) : "Card Number"}
                            {...register("cardNumber", {
                                required: true,
                                maxLength: {value: 16, message: 'Number must contain 16 digits'},
                                minLength: {value: 16, message: 'Number must contain 16 digits'},
                            })}
                        />
                        <Box display={'flex'}>
                            <Typography mt={1.4} mr={1}>
                                Date:
                            </Typography>
                            <TextField {...register("firstCardDate", {required: true})}
                                       type="number"
                                       sx={{maxWidth: 22, pt: 1, mr: 0.5}} variant="standard"/>
                            <span style={{fontSize: 25, marginTop: 6}}>/</span>
                            <TextField {...register("secondCardDate", {required: true})}
                                       type="number"
                                       sx={{maxWidth: 22, pt: 1, ml: 0.4}} variant="standard"/>
                        </Box>
                    </Box>
                </Paper>
            </div>
        </Grid>
    );
};

