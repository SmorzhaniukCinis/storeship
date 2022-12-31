import {AUTH_USER, THROW_SOME_ERROR} from "./appActionTypes";
import {authDataType} from "../../API/types/authTypes";
import {userType} from "../../API/types/userTypes";

export type initialStateType = {
    token: string
    errorMessage:string
    isLightTheme: boolean
    isLoading: boolean
    adminSearch: string
    filter: filterTypes
    currentUser: userType | null
}
export type filterTypes = 'Asc' | 'Desc' | 'electronics'| 'jewelery' | "men's clothing" | "women's clothing"

export type authUserType = {
    type: typeof AUTH_USER
    authData:authDataType
}
export type throwSomeErrorType = {
    type: typeof THROW_SOME_ERROR
    error:string
}