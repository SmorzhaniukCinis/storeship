import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {productType} from "../../API/types/productsType";
import {initialStateType} from "./types";
import {cartType} from "../../API/types/cartsTypes";
import {postDepartment, settlement} from "../../API/types/novaPoshta";



const initialState: initialStateType = {
    settlements: [],
    postDepartments: []
};


export const novaPoshtaSlice = createSlice({
    name: 'novaPoshta',
    initialState,
    reducers: {
        setSettlements: (state, action: PayloadAction<settlement[]>) => {
            state.settlements = action.payload;
        },
        setPostDepartments: (state, action: PayloadAction<postDepartment[]>) => {
            state.postDepartments = action.payload;
        },
    },
});

export const {setSettlements, setPostDepartments} = novaPoshtaSlice.actions;

export default novaPoshtaSlice.reducer;
