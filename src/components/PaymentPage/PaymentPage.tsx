import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import {Autocomplete, Paper, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {novaPoshtaSelectors} from "../../redux/novaPoshta/novaPoshtaSelectors";
import {novaPoshtaSagaActions} from "../../redux/novaPoshta/novaPoshtaSaga";
import {settlement} from "../../API/types/novaPoshta";

export const PaymentPage = () => {

    useEffect(() => {


    }, [])

    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = (data: any) => console.log(data);
    const dispatch = useAppDispatch()

    const settlements = useAppSelector(novaPoshtaSelectors.selectCurrentCart)


    const searchSettlement = (e: any) => {
        e.target.value.length > 0 &&
        dispatch(novaPoshtaSagaActions.fetchSettlements(e.target.value))
    }


    const settlementFormation = (settlement: settlement) => {
        return settlement.SettlementTypeDescription
            + ' ' + settlement.Description + ', ' + settlement.AreaDescription + ' обл.'
    }

    const getSettlementId = (settlement: string) => {

        const location = settlements.find(item => settlementFormation(item) === settlement)
        console.log(location)
    }

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
                        <Autocomplete
                            onClose={(e:any)=>setTimeout(()=>getSettlementId(e.target.value || e.target.innerText), 0)}
                            options={settlements}
                            autoHighlight
                            getOptionLabel={settlementFormation}
                            renderOption={(props, option) => (
                                <Box component="li" {...props}>
                                    {settlementFormation(option)}
                                </Box>

                            )}
                            renderInput={(params) => (<TextField
                                {...params}
                                label="SETTLEMENT"
                                {...register("location", {
                                    required: true,
                                    onChange: searchSettlement
                                })}
                                inputProps={{
                                    ...params.inputProps,
                                }}
                            />)
                            }
                        />
                    </Grid>
                    <Grid xs={12}>
                        <input {...register("postOffice", {required: true})} />
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

