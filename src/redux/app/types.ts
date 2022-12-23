import {AUTH_USER, THROW_SOME_ERROR} from "./appActionTypes";
import {authDataType} from "../../API/types/authTypes";

export type initialStateType = {
    token: string
    errorMessage:string
    isLightTheme: boolean
    isLoading: boolean
    adminSearch: string
}

export type authUserType = {
    type: typeof AUTH_USER
    authData:authDataType
}
export type throwSomeErrorType = {
    type: typeof THROW_SOME_ERROR
    error:string
}