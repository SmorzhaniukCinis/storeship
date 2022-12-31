import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {filterTypes, initialStateType} from "./types";
import {userType} from "../../API/types/userTypes";


const initialState: initialStateType = {
    token: '',
    errorMessage: '',
    isLightTheme: true,
    isLoading: false,
    adminSearch: '',
    filter: 'Asc',
    currentUser: null
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
        setTheme: (state, action: PayloadAction<boolean>) => {
            state.isLightTheme = action.payload
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setAdminSearch: (state, action: PayloadAction<string>) => {
            state.adminSearch = action.payload
        },
        setFilter: (state, action: PayloadAction<filterTypes>) => {
            state.filter = action.payload
        },
        setCurrentUser: (state, action: PayloadAction<userType | null>) => {
            state.currentUser = action.payload
        },
    },
});

export const {setToken, throwSomeError, setTheme, setIsLoading, setAdminSearch, setFilter, setCurrentUser} = authSlice.actions;

export default authSlice.reducer;
