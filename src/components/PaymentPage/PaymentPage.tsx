import React, {useEffect, useState} from 'react';
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
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {cartSelectors} from "../../redux/carts/cartsSelectors";
import {persistSelectors} from "../../redux/persist/persistSelectors";
import {productsSagaActions} from "../../redux/products/productSaga";
import Box from "@mui/material/Box";
import {SmallLoader} from "../AdminPanel/SmallLoader";


export const PaymentPage = () => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const [paymentMethod, setPaymentMethod] = useState('cash')
    const cart = useAppSelector(persistSelectors.selectCart)
    const cartWithProduct = useAppSelector(cartSelectors.selectCartWithProducts)
    const dispatch = useAppDispatch()

    const onSubmit = (data: any) => console.log(data);
    const changePaymentMethod = (event: SelectChangeEvent) => {
        setPaymentMethod(event.target.value)
    }

    useEffect(() => {
        dispatch(productsSagaActions.fetchProductForCart(cart))
    }, [cart, dispatch])

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
                    {paymentMethod === 'card' && <AddCard errors={errors} register={register}/>}
                    {cartWithProduct
                        ? cartWithProduct.map(cartItem => <PriceProductItem key={cartItem.product.id} cartItem={cartItem}/>)
                        : <Box textAlign='center'><SmallLoader/></Box>
                    }
                    <SubmitButton/>
                </Grid>
            </form>
        </Paper>
    );
};

