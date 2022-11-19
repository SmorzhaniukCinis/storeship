import React, {useState} from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import {Paper, Select, SelectChangeEvent, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {FindSettlementField} from "./findSettlementField";
import {FindPostDepartmentField} from "./findPostDepartmentField";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import {AddCard} from "./AddCard";

export const PaymentPage = () => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = (data: any) => console.log(data);

    const [paymentMethod, setPaymentMethod] = useState('cash')
    const changePaymentMethod = (event: SelectChangeEvent) => {
        setPaymentMethod(event.target.value)
    }

    return (
        <Paper elevation={20} sx={{width: {md: '100%'}, p: {xs: 1, md: 15}, m: {xs: 1} }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={{xs: 2, md: 3}}>
                    <Grid xs={12} md={6}>
                        <TextField fullWidth={true} label="FIRST NAME*" {...register("firstName", {required: true})}
                                   variant="outlined"/>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <TextField fullWidth={true} label="LAST NAME*" {...register("lastName", {required: true})}
                                   variant="outlined"/>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <TextField fullWidth={true} label="PHONE NUMBER*" {...register("phoneNumbet", {required: true})}
                                   variant="outlined"/>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <TextField fullWidth={true} label="EMAIL" {...register("email*", {required: true})}
                                   variant="outlined"/>
                    </Grid>
                    <Grid xs={12}>
                        <FindSettlementField register={register}/>
                    </Grid>
                    <Grid xs={12}>
                        <FindPostDepartmentField register={register}/>
                    </Grid>
                    <Grid xs={12} display={'flex'} alignItems={'center'}>
                        <Typography sx={{mr: 2}}>Chose payment method</Typography>
                        <Select
                            {...register("paymentMethod", {value: paymentMethod})}
                            variant={'standard'}
                            value={paymentMethod}
                            onChange={changePaymentMethod}
                        >
                            <MenuItem value="cash">Cash</MenuItem>
                            <MenuItem value="card">Card</MenuItem>
                        </Select>
                    </Grid>
                    <Grid xs={12} sx={{maxHeight: {md: 260, xs: 300}}}>
                        {paymentMethod === 'card' &&  <AddCard/>}

                    </Grid>
                    <Grid xs={12}><input type="submit"/></Grid>
                </Grid>
            </form>
        </Paper>
    );
};

