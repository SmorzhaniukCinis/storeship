import {userType} from "../../API/types/userTypes";

export type initialStateType = {
    users: userType[]
    currentUser: userType | null

}