import {call, put, takeEvery} from 'redux-saga/effects'
import {authUserType, throwSomeErrorType} from "./types";
import {authAPI} from "../../API/authAPI";
import {authDataType} from "../../API/types/authTypes";
import {AUTH_USER, THROW_SOME_ERROR} from "./appActionTypes";
import {setToken, throwSomeError} from "./appSlise";


function* authUser(action: authUserType) {
    try {
        const token: string = yield call(() => authAPI.authUser(action.appData));
        yield put(setToken(token));
    } catch (e: any) {
        yield put(throwSomeError(e.message));
    }
}


export const appSagaActions = {
    fetchProducts: (authData: authDataType): authUserType => ({type: AUTH_USER, authData: appData}),
}

export function* appSaga() {
    yield takeEvery(AUTH_USER, authUser);
}
