import {cartProduct, cartType, newCartType} from "../../API/types/cartsTypes";
import {
    DELETE_CART,
    FETCH_CART_BY_ID,
    FETCH_CART_BY_USER,
    FETCH_CARTS,
    POST_NEW_CART,
    UPDATE_CART
} from "./cartActionTypes";
import {productType, sortType} from "../../API/types/productsType";

export type initialStateType = {
    isLoading: boolean
    carts: cartType[],
    currentCart: cartType | null,
    cartProducts: productType[],
    dateRange: {
        startDate: string,
        endDate: string
    }
    cartWithProducts: cartWithProductType
}

export type  cartWithProductType = Array<{
    product: productType,
    quantity: number
}>
export type fullCarts<C, U= undefined> = {
    cart: C,
    user: U
}


export type fetchCartsType = {
    type: typeof FETCH_CARTS
    params: {
        portion: number | undefined
        sort: sortType | undefined
    }
}
export type fetchCartByIdType = {
    type: typeof FETCH_CART_BY_ID
    cartId: number
}
export type fetchCartByUserType = {
    type: typeof FETCH_CART_BY_USER
    userId: number
}
export type addNewCartType = {
    type: typeof POST_NEW_CART
    newCart: newCartType
}
export type updateCartType = {
    type: typeof UPDATE_CART
    cartData: { cartId: number, updatedCart: newCartType }
}
export type deleteCartType = {
    type: typeof DELETE_CART
    cartId: number
}