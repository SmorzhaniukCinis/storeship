import React from 'react';
import Box from "@mui/material/Box";
import {Autocomplete, TextField} from "@mui/material";
import {novaPoshtaSagaActions} from "../../redux/novaPoshta/novaPoshtaSaga";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {novaPoshtaSelectors} from "../../redux/novaPoshta/novaPoshtaSelectors";
import {settlement} from "../../API/types/novaPoshta";
import {setSettlements} from "../../redux/novaPoshta/novaPoshtaSlise";
import Typography from "@mui/material/Typography";

type props = {
    register: any
}

export const FindSettlementField = ({register}:props) => {

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
        dispatch(setSettlements([]))
        const location = settlements.find(item => settlementFormation(item) === settlement)
        location && dispatch(novaPoshtaSagaActions.fetchPostDepartments(location.Ref))
    }



    return (
        <Box>
            <Typography sx={{pb: 1}}>
                Support only Ukrainian language and Ukrainian settlements.
            </Typography>
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
                    label="SETTLEMENT*"
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
        </Box>

    );
};

