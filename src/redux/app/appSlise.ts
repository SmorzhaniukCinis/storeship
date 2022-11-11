import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {initialStateType, throwSomeErrorType} from "./types";
import {THROW_SOME_ERROR} from "./appActionTypes";


const initialState: initialStateType = {
    token: '',
    errorMessage: ''
};


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        throwSomeError: (state, action: PayloadAction<string>) => {
            state.errorMessage = action.payload
        },

    },
});

export const {setToken, throwSomeError} = authSlice.actions;

export default authSlice.reducer;
