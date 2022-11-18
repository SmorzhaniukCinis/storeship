import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import {Paper, TextField} from "@mui/material";
import {useForm} from "react-hook-form";

import {FindSettlementField} from "./findSettlementField";
import {FindPostDepartmentField} from "./findPostDepartmentField";

export const PaymentPage = () => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = (data: any) => console.log(data);


    return (
        <Paper sx={{width: '80%', margin: '0 auto', p: 4}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={{xs: 2, md: 3}}>
                    <Grid xs={12} md={6}>
                        <TextField fullWidth={true} label="FIRST NAME" {...register("firstName", {required: true})}
                                   variant="outlined"/>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <TextField fullWidth={true} label="LAST NAME" {...register("lastName", {required: true})}
                                   variant="outlined"/>
                    </Grid>
                    <Grid xs={12}>
                        <FindSettlementField register={register}/>
                    </Grid>
                    <Grid xs={12}>
                        <FindPostDepartmentField register={register}/>
                    </Grid>
                    <Grid xs={12}>
                        <input {...register("payment", {required: true})} />
                    </Grid>
                    <Grid xs={12}>
                        <input {...register("specialComment", {required: true})} />
                    </Grid>
                    <Grid xs={12}><input type="submit"/></Grid>
                </Grid>
            </form>
        </Paper>
    );
};

