import React from 'react';
import {Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useForm} from "react-hook-form";
import {newProduct} from "../../../API/types/productsType";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {SelectProductImage} from "./SelectProductImage";
import {TitleField} from "./TitleField";
import {PriseField} from "./PriceField";
import {DescriptionField} from "./DescriptionField";
import {CategoryField} from "./CategoryField";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: {md: '70%', xs: '90%'},
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
};


export const NewProductModal = () => {

    const {control, register, handleSubmit, formState: {errors}} = useForm<newProduct>();
    const onSubmit = handleSubmit(data => console.log(data));


    return (

        <Paper sx={style}>
            <Typography variant='h4' textAlign='center' sx={{mb: 2}}>
                Add new product
            </Typography>
            <form onSubmit={onSubmit}>
                <Box sx={{display: 'flex', flexDirection: 'column', padding: {md: '10px 150px', xs: 0}}}>
                    <TitleField register={register} errors={errors}/>
                    <PriseField register={register} errors={errors}/>
                    <DescriptionField register={register} errors={errors}/>
                    <CategoryField register={register} errors={errors}/>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <Typography fontSize={14} sx={{pb: 1}} color='error'>{errors.image?.message}</Typography>
                        <SelectProductImage control={control} name='image'/>
                    </Box>
                    <Button sx={{height: 50}} type="submit" variant='contained' color='success'>add product</Button>
                </Box>
            </form>
        </Paper>
    );
};

