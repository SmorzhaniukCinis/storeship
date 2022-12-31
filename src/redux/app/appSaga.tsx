import {call, put, takeEvery} from 'redux-saga/effects'
import {authUserType} from "./types";
import {authAPI} from "../../API/authAPI";
import {authDataType} from "../../API/types/authTypes";
import {AUTH_USER} from "./appActionTypes";
import {setCurrentUser, setToken, throwSomeError} from "./appSlise";
import {userType} from "../../API/types/userTypes";
import {userAPI} from "../../API/userAPI";


function* authUser(action: authUserType) {
    try {
        const token: string = yield call(() => authAPI.authUser(action.authData));
        if (token) {
            yield put(setToken(token));
            const users: userType[] = yield call(() => userAPI.getUsers());
            const currentUser = users.find( user => user.username === action.authData.username)
            if(currentUser) {
                yield put(setCurrentUser(currentUser));
            }
        }
    } catch (e: any) {
        console.log(e)
        if(e.response.status === 401)
        yield put(throwSomeError('Wrong Username or Password'));
    }
}


export const appSagaActions = {
    authUser: (authData: authDataType): authUserType => ({type: AUTH_USER, authData}),
}

export function* appSaga() {
    yield takeEvery(AUTH_USER, authUser);
}
