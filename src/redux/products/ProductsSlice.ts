import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {productType} from "../../API/types/productsType";
import {currentCategory, initialStateType} from "./types";



const initialState: initialStateType = {
    products: [],
    currentProduct: null,
    currentCategory: 'electronics'
};


export const productsSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<productType[]>) => {
            state.products = action.payload;
        },
        setCurrentProduct: (state, action: PayloadAction<productType>) => {
            state.currentProduct = action.payload;
        },
        setCategories: (state, action: PayloadAction<currentCategory>) => {
            state.currentCategory = action.payload;
        },
    },
});

export const {setProducts, setCurrentProduct, setCategories} = productsSlice.actions;

export default productsSlice.reducer;
