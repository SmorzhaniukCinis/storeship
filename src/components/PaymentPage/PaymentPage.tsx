import React, {useState} from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import {InputAdornment, Paper, SelectChangeEvent, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {FindSettlementField} from "./FindSettlementField";
import {FindPostDepartmentField} from "./FindPostDepartmentField";
import {AddCard} from "./AddCard";
import {PaymentMethod} from "./PaymentMethod";
import Button from "@mui/material/Button";
import {CartProductsImg} from "../CommonComponnents/CartProductsImg";
import {CartProductName} from "../CommonComponnents/CartProductName";
import {TotalPrise} from "../CommonComponnents/TotalPrise";
import {PriceProductItem} from "../CommonComponnents/PriceProductItem";
import {PhoneNumberField} from "./PhoneNumberField";
import {EmailField} from "./EmailField";
import {FirstNameField} from "./FirstNameField";
import LastNameField from "./LastNameField";
import {SubmitButton} from "./SubmitButton";


export const PaymentPage = () => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    const onSubmit = (data: any) => console.log(data);

    const [paymentMethod, setPaymentMethod] = useState('cash')
    const changePaymentMethod = (event: SelectChangeEvent) => {
        setPaymentMethod(event.target.value)
    }


    return (
        <Paper elevation={20} sx={{width: {md: '100%'}, p: {xs: 1, md: 15}, m: {xs: 1}}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={{xs: 2, md: 3}}>
                    <FirstNameField register={register} errors={errors}/>
                    <LastNameField register={register} errors={errors}/>
                    <PhoneNumberField register={register} errors={errors}/>
                    <EmailField register={register} errors={errors}/>
                    <FindSettlementField register={register}/>
                    <FindPostDepartmentField register={register} watch={watch}/>
                    <PaymentMethod paymentMethod={paymentMethod}
                                   changePaymentMethod={changePaymentMethod}
                                   register={register}/>
                    {
                        paymentMethod === 'card' && <AddCard errors={errors} register={register}/>
                    }
                    <PriceProductItem/>
                    <SubmitButton/>
                </Grid>
            </form>
        </Paper>
    );
};

