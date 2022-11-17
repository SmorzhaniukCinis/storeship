import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {productType} from "../../API/types/productsType";
import {initialStateType} from "./types";
import {cartType} from "../../API/types/cartsTypes";
import {settlement} from "../../API/types/novaPoshta";



const initialState: initialStateType = {
    settlements: [],
};


export const novaPoshtaSlice = createSlice({
    name: 'novaPoshta',
    initialState,
    reducers: {
        setSettlements: (state, action: PayloadAction<settlement[]>) => {
            state.settlements = action.payload;
        },
    },
});

export const {setSettlements} = novaPoshtaSlice.actions;

export default novaPoshtaSlice.reducer;
