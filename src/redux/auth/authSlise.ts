import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {initialStateType} from "./types";


const initialState: initialStateType = {
    token: ''
};


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
    },
});

export const {setToken} = authSlice.actions;

export default authSlice.reducer;
