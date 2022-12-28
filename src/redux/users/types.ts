import {newUserType, userType} from "../../API/types/userTypes";
import {sortType} from "../../API/types/productsType";
import {DELETE_USER, FETCH_USER_BY_ID, FETCH_USERS, POST_NEW_USER, UPDATE_USER} from "./usersActionTypes";

export type initialStateType = {
    users: userType[]
    currentUser: userType | null
    isLoading: boolean
}

export type fetchUsersType = {
    type: typeof FETCH_USERS
    params: { portion: number | undefined, sort: sortType | undefined }
}
export type fetchUserByIdType = {
    type: typeof FETCH_USER_BY_ID
    userId: number
}
export type addNewUserType = {
    type: typeof POST_NEW_USER
    newUser: newUserType
}
export type updateUserType = {
    type: typeof UPDATE_USER
    userData: {
        userId: number
        updatedUser: newUserType
    }
}
export type deleteUserType = {
    type: typeof DELETE_USER
    userId: number
}