import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {initialStateType} from "./types";
import {userType} from "../../API/types/userTypes";
import {sortByTypes} from "../products/types";


const initialState: initialStateType = {
    users: [],
    currentUser: null,
    isLoading: true,
    sortBy: 'initial',
};


export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<userType[]>) => {
            state.users = action.payload;
        },
        setUser: (state, action: PayloadAction<userType | null>) => {
            state.currentUser = action.payload;
        },
        setIsUsersLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setSortBy: (state, action: PayloadAction<sortByTypes>) => {
            state.sortBy = action.payload
            state.users.reverse()
        },
    },
});

export const {setUsers, setUser, setIsUsersLoading, setSortBy} = usersSlice.actions;

export default usersSlice.reducer;
