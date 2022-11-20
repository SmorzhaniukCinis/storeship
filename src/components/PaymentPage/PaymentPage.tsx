import React, {useState} from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import {InputAdornment, Paper, SelectChangeEvent, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {FindSettlementField} from "./findSettlementField";
import {FindPostDepartmentField} from "./findPostDepartmentField";
import {AddCard} from "./AddCard";
import {PaymentMethod} from "./PaymentMethod";
import Button from "@mui/material/Button";


export const PaymentPage = () => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    const onSubmit = (data: any) => console.log(data);

    const [paymentMethod, setPaymentMethod] = useState('cash')
    const changePaymentMethod = (event: SelectChangeEvent) => {
        setPaymentMethod(event.target.value)
    }

    const emailPattern = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu


    return (
        <Paper elevation={20} sx={{width: {md: '100%'}, p: {xs: 1, md: 15}, m: {xs: 1}}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={{xs: 2, md: 3}}>
                    <Grid xs={12} md={6}>
                        <TextField color={errors.firstName && 'error'} fullWidth={true}
                                   label="First Name*" {...register("firstName", {
                            required: true,
                        })}
                                   variant="outlined"/>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <TextField color={errors.lastName && 'error'} fullWidth={true}
                                   label="Last Name*" {...register("lastName", {
                            required: true,
                        })}
                                   variant="outlined"/>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <TextField
                            type="number"
                            color={errors.phoneNumber && 'error'}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">+380</InputAdornment>,
                            }} fullWidth={true}
                            label={String(errors.phoneNumber?.message) ||  "Phone number*"}
                            {...register("phoneNumber", {
                                required: true,
                                minLength: {value: 9, message: "the number is too short"},
                                maxLength: {value: 9, message: "the number is too long"}
                            })}
                            variant="outlined"/>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <TextField
                            color={errors.email && 'error'}
                            type='email'
                            fullWidth={true}
                            label={String(errors.email?.message) ||  "Email*"}
                            {...register("email", {
                                required: true,
                                pattern: {value: emailPattern , message: "The email entered is incorrect"}
                            })}
                            variant="outlined"/>
                    </Grid>
                    <Grid xs={12}>
                        <FindSettlementField register={register} />
                    </Grid>
                    <Grid xs={12}>
                        <FindPostDepartmentField register={register} watch={watch}/>
                    </Grid>
                    <Grid xs={12} display={'flex'} alignItems={'center'}>
                        <PaymentMethod paymentMethod={paymentMethod}
                                       changePaymentMethod={changePaymentMethod}
                                       register={register}/>
                    </Grid>
                    <Grid xs={12} sx={{maxHeight: {md: 260, xs: 300}}}>
                        {paymentMethod === 'card' && <AddCard errors={errors} register={register}/>}
                    </Grid>
                    <Grid xs={12}>
                        <Button size='large' type='submit' variant='contained'>
                            Confirm order
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

