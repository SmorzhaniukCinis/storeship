import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {initialStateType} from "./types";
import {userType} from "../../API/types/userTypes";


const initialState: initialStateType = {
    users: [],
    currentUser: null,
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
    },
});

export const {setUsers, setCurrentUser} = usersSlice.actions;

export default usersSlice.reducer;
