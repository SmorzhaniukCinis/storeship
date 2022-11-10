import {cartType} from "../../API/types/cartsTypes";

export type initialStateType = {
    carts: cartType[],
    currentCart: cartType | null,
}