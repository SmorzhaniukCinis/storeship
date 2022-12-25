import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {initialStateType} from "./types";
import {cartType} from "../../API/types/cartsTypes";
import dayjs from "dayjs";
import {userType} from "../../API/types/userTypes";


const initialState: initialStateType = {
    isLoading: false,
    carts: [],
    currentCart: null,
    dateRange: {
        startDate: '2000-01-01',
        endDate: dayjs(new Date()).format('YYYY-MM-DD')
    }

};


export const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        setIsCartsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setCarts: (state, action: PayloadAction<cartType[]>) => {
            state.carts = action.payload;
        },
        setCurrentCart: (state, action: PayloadAction<cartType>) => {
            state.currentCart = action.payload;
        },
        setDateFilter: (state, action: PayloadAction<{ startDate?: string, endDate?: string }>) => {
            state.dateRange = {
                startDate: action.payload.startDate || state.dateRange.startDate,
                endDate: action.payload.endDate || state.dateRange.endDate
            }
        },
    },
});

export const {setCarts, setCurrentCart, setDateFilter, setIsCartsLoading} = cartSlice.actions;

export default cartSlice.reducer;
