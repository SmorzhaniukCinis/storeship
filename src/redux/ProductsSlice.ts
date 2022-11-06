import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from './store';

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};


export const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { incrementByAmount } = productsSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default productsSlice.reducer;
