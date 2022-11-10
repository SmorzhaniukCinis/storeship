import {AUTH_USER} from "./authActionTypes";
import {authDataType} from "../../API/types/authTypes";

export type initialStateType = {
    token: string
}
export type authUserType = {
    type: typeof AUTH_USER
    authData:authDataType
}