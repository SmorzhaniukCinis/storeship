import {call, put, takeEvery} from 'redux-saga/effects'
import {authUserType} from "./types";
import {authAPI} from "../../API/authAPI";
import {authDataType} from "../../API/types/authTypes";
import {AUTH_USER} from "./authActionTypes";
import {setToken} from "./authSlise";


function* authUser(action: authUserType) {
    try {
        const token: string = yield call(() => authAPI.authUser(action.authData));
        yield put(setToken(token));
    } catch (e: any) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}


export const productsSagaActions = {
    fetchProducts: (authData: authDataType): authUserType => ({type: AUTH_USER, authData}),
}

export function* authSaga() {
    yield takeEvery(AUTH_USER, authUser);
}
