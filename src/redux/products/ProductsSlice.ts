import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {newProduct, productType} from "../../API/types/productsType";
import {initialStateType, sortByTypes} from "./types";


const initialState: initialStateType = {
    products: [],
    currentProduct: null,
    currentCategory: 'electronics',
    isProductsLoading: false,
    sortBy: 'initial',
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
        addNewProduct: (state, action: PayloadAction<productType>) => {
            state.products.push(action.payload)
        },
        deleteProductFromState: (state, action: PayloadAction<{ productId: number }>) => {
            state.products = state.products.filter(product => product.id !== action.payload.productId)
        },
        updateProductFromState: (state, action: PayloadAction<{ productId: number, product: newProduct }>) => {
            const index = state.products.findIndex(product => product.id === action.payload.productId)
            const {category, description, image, price, title} = action.payload.product
            state.products[index] = {...state.products[index], category, description, image, price, title}
        },
        setSortBy: (state, action: PayloadAction<sortByTypes>) => {
            state.sortBy = action.payload
            state.products.reverse()
        },
    },
});

export const {
    setProducts,
    setCurrentProduct,
    setIsProductsLoading,
    addNewProduct,
    deleteProductFromState,
    updateProductFromState,
    setSortBy
} = productsSlice.actions;

export default productsSlice.reducer;

