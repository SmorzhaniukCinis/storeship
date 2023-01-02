import React, {useEffect, useState} from 'react';
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {AddRating} from "./AddRating";
import {productFeedbackType} from "../../redux/products/types";
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {appSelectors} from "../../redux/app/appSelectors";
import Typography from "@mui/material/Typography";
import {setProductFeedback} from "../../redux/products/ProductsSlice";


export const ProductAddingFeedback = () => {

    const user = useAppSelector(appSelectors.selectCurrentUser)
    const dispatch = useAppDispatch()
    const {register, setValue, setError, handleSubmit, formState: {errors}} = useForm<productFeedbackType>({
        defaultValues: {
            username: user?.username
        }
    });

    const onSubmit = handleSubmit(data => {
        if(!data.rating) {
            setError('rating', {type: 'noRating', message: 'Add your rating' })
        } else {
            dispatch(setProductFeedback(data))
        }

    });

    useEffect(() => {
        if(user?.username)
        setValue('username', user?.username)
    }, [setValue, user])
    
    return (
        <form onSubmit={onSubmit}>
            <TextField
                sx={{width: '100%', mt: 2}}
                id="standard-multiline-flexible"
                label="Enter your feedback"
                multiline
                {...register('feedback', {required: 'Add your feedback'})}
                maxRows={4}
                variant="standard"
            />
            <Typography sx={{fontSize: 16, color: '#e14141'}}>{errors.feedback?.message}</Typography>
            <Box display='flex' sx={{mt: 1, mb: 1}}>
                <Button color='success' type='submit' variant='outlined'>add feedback</Button>
                <AddRating setValue={setValue}/>
            </Box>
            <Typography sx={{fontSize: 16, color: '#e14141'}}>{errors.rating?.message}</Typography>
        </form>
    );
};

