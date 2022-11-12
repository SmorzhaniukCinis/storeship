import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {productType} from "../../API/types/productsType";
import {currentCategory, initialStateType} from "./types";



const initialState: initialStateType = {
    products: [],
    currentProduct: null,
    currentCategory: 'electronics',
    isProductsLoading: false
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
        setIsProductsLoading: (state, action: PayloadAction<boolean>) => {
            state.isProductsLoading = action.payload;
        },
    },
});

export const {setProducts, setCurrentProduct, setIsProductsLoading} = productsSlice.actions;

export default productsSlice.reducer;
