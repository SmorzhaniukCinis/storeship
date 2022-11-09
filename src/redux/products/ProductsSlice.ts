import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {productType} from "../../API/types/productsType";

export interface CounterState {
    products: productType[]
    currentProduct: productType | null
    categories: string[]
}

const initialState: CounterState = {
    products: [],
    currentProduct: null,
    categories: []
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
        setCategories: (state, action: PayloadAction<string[]>) => {
            state.categories = action.payload;
        },
    },
});

export const {setProducts, setCurrentProduct, setCategories} = productsSlice.actions;

export default productsSlice.reducer;
