import {call, put, takeEvery} from 'redux-saga/effects'
import {sortType} from "../../API/types/productsType";
import {
    addNewCartType,
    deleteCartType,
    fetchCartByIdType,
    fetchCartByUserType,
    fetchCartsType,
    updateCartType
} from "./types";
import {cartAPI} from "../../API/cartsAPI";
import {cartType, newCartType} from "../../API/types/cartsTypes";
import {setCarts, setCurrentCart} from "./cartSlise";
import {
    DELETE_CART,
    FETCH_CART_BY_ID,
    FETCH_CART_BY_USER,
    FETCH_CARTS,
    POST_NEW_CART,
    UPDATE_CART
} from "./cartActionTypes";
import {throwSomeError} from "../app/appSlise";


function* fetchCarts(action: fetchCartsType) {
    const {portion, sort, startDate, endDate} = action.params
    try {
        const carts: cartType[] = yield call(() => cartAPI.getCarts(portion, sort, startDate, endDate));
        debugger
        yield put(setCarts(carts));
    } catch (e: any) {
        yield put(throwSomeError(e.message));
    }
}

function* fetchCartById(action: fetchCartByIdType) {
    try {
        const cart: cartType = yield call(cartAPI.getCartById, action.cartId);
        yield put(setCurrentCart(cart));
    } catch (e: any) {
        yield put(throwSomeError(e.message));
    }
}

function* fetchCartByUser(action: fetchCartByUserType) {
    try {
        const cart: cartType = yield call(cartAPI.getCartsByUser, action.userId);
        yield put(setCurrentCart(cart));
    } catch (e: any) {
        yield put(throwSomeError(e.message));
    }
}

function* addNewCart(action: addNewCartType) {
    try {
        const cart: cartType = yield call(cartAPI.addNewCart, action.newCart);
        yield put(setCurrentCart(cart));
    } catch (e: any) {
        yield put(throwSomeError(e.message));
    }
}

function* updateCart(action: updateCartType) {
    const {cartId, updatedCart} = action.cartData
    try {
        const cart: cartType = yield call(() => cartAPI.updateCart(cartId, updatedCart));
        yield put(setCurrentCart(cart));
    } catch (e: any) {
        yield put(throwSomeError(e.message));
    }
}

function* deleteCart(action: deleteCartType) {
    try {
        const cart: cartType = yield call(cartAPI.deleteCart, action.cartId);
        yield put(setCurrentCart(cart));
    } catch (e: any) {
        yield put(throwSomeError(e.message));
    }
}


export const cartSagaActions = {
    fetchCarts: (portion?: number, sort?: sortType, startDate?: string, endDate?: string): fetchCartsType => ({
        type: FETCH_CARTS,
        params: {portion, sort, startDate, endDate}
    }),
    fetchCartById: (cartId: number): fetchCartByIdType => ({type: FETCH_CART_BY_ID, cartId}),
    fetchCartByUser: (userId: number): fetchCartByUserType => ({type: FETCH_CART_BY_USER, userId}),
    addNewCart: (newCart: newCartType): addNewCartType => ({type: POST_NEW_CART, newCart}),
    updateCart: (cartId: number, updatedCart: newCartType): updateCartType => ({
        type: UPDATE_CART, cartData: {
            cartId,
            updatedCart
        }
    }),
    deleteCart: (cartId: number): deleteCartType => ({type: DELETE_CART, cartId})
}

export function* CartsSaga() {
    yield takeEvery(FETCH_CARTS, fetchCarts);
    yield takeEvery(FETCH_CART_BY_ID, fetchCartById)
    yield takeEvery(FETCH_CART_BY_USER, fetchCartByUser)
    yield takeEvery(POST_NEW_CART, addNewCart)
    yield takeEvery(UPDATE_CART, updateCart)
    yield takeEvery(DELETE_CART, deleteCart)
}
