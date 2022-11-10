import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {productType} from "../../API/types/productsType";
import {initialStateType} from "./types";
import {cartType} from "../../API/types/cartsTypes";



const initialState: initialStateType = {
    carts: [],
    currentCart: null,
};


export const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        setCarts: (state, action: PayloadAction<cartType[]>) => {
            state.carts = action.payload;
        },
        setCurrentCart: (state, action: PayloadAction<cartType>) => {
            state.currentCart = action.payload;
        },
    },
});

export const {setCarts, setCurrentCart} = cartSlice.actions;

export default cartSlice.reducer;
