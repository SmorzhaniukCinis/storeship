import {cartProduct} from "../../API/types/cartsTypes";
import {userType} from "../../API/types/userTypes";

export type initialStateType = {
    cart: cartProduct[]
    currentUser: userType | null
}