import React, {useEffect, useState} from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import {Paper, SelectChangeEvent} from "@mui/material";
import {useForm} from "react-hook-form";
import {FindSettlementField} from "./FindSettlementField";
import {FindPostDepartmentField} from "./FindPostDepartmentField";
import {AddCard} from "./AddCard";
import {PaymentMethod} from "./PaymentMethod";
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
import {SuccessModal} from "./SuccessModal";

type formData = {
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    location: string
    postDepartment: string
    paymentMethod: string
    CVVNumber?: string
    cardNumber?: string
    firstCardDate?: string
    secondCardDate?: string
}

export const PaymentPage = () => {


    const [paymentMethod, setPaymentMethod] = useState('cash')
    const cart = useAppSelector(persistSelectors.selectCart)
    const cartWithProduct = useAppSelector(cartSelectors.selectCartWithProducts)
    const customer = useAppSelector(persistSelectors.selectCurrentUser)
    const dispatch = useAppDispatch()
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const {register, handleSubmit, watch, formState: {errors}} = useForm<formData>({
        defaultValues: {
            email: customer?.email || '',
            firstName: customer?.name.firstname || '',
            lastName: customer?.name.lastname || '',
        }
    });


    const onSubmit = handleSubmit ((data) => {
        setIsModalOpen(true)
    })
    const changePaymentMethod = (event: SelectChangeEvent) => {
        setPaymentMethod(event.target.value)
    }

    useEffect(() => {
        dispatch(productsSagaActions.fetchProductForCart(cart))
    }, [cart, dispatch])

    return (
        <Paper elevation={20} sx={{width: {md: '100%'}, p: {xs: 1, md: 15}, m: {xs: 1}}}>
            <form onSubmit={onSubmit}>
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
                    <SuccessModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
                </Grid>
            </form>
        </Paper>
    );
};

