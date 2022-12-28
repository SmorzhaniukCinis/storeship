import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {initialStateType} from "./types";
import {userType} from "../../API/types/userTypes";


const initialState: initialStateType = {
    users: [],
    currentUser: null,
    isLoading: true,
};


export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<userType[]>) => {
            state.users = action.payload;
        },
        setCurrentUser: (state, action: PayloadAction<userType | null>) => {
            state.currentUser = action.payload;
        },
        setIsUsersLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export const {setUsers, setCurrentUser, setIsUsersLoading} = usersSlice.actions;

export default usersSlice.reducer;
