import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';
import {productType} from "../API/productAPI";

export interface CounterState {
  products: productType[]
}

const initialState: CounterState = {
  products: []
};


export const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<productType[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export const selectProducts = (state: RootState) => state.productsData.products;

export default productsSlice.reducer;
