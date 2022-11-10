import {call, put, takeEvery} from 'redux-saga/effects'
import {sortType} from "../../API/types/productsType";
import {userAPI} from "../../API/userAPI";
import {addNewUserType, deleteUserType, fetchUserByIdType, fetchUsersType, updateUserType} from "./types";
import {DELETE_USER, FETCH_USER_BY_ID, FETCH_USERS, POST_NEW_USER, UPDATE_USER} from "./usersActionTypes";
import {newUserType, userType} from "../../API/types/userTypes";
import {setCurrentUser, setUsers} from "./usersSlise";


function* fetchUsers(action: fetchUsersType) {
    const {portion, sort} = action.params
    try {
        const users: userType[] = yield call(() => userAPI.getUsers(portion, sort));
        yield put(setUsers(users));
    } catch (e: any) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* fetchUserById(action: fetchUserByIdType) {
    try {
        const users: userType = yield call(userAPI.getUserById, action.userId);
        yield put(setCurrentUser(users));
    } catch (e: any) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* addNewUser(action: addNewUserType) {
    try {
        const user: userType = yield call(userAPI.addNewUser, action.newUser);
        yield put(setCurrentUser(user));
    } catch (e: any) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* updateUser(action: updateUserType) {
    const {userId, updatedUser} = action.userData
    try {
        const user: userType = yield call(() => userAPI.updateUser(userId, updatedUser));
        yield put(setCurrentUser(user));
    } catch (e: any) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* deleteUser(action: deleteUserType) {
    try {
        const user: userType = yield call(userAPI.deleteUser, action.userId);
        yield put(setCurrentUser(user));
    } catch (e: any) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}


export const productsSagaActions = {
    fetchUsers: (portion?: number, sort?: sortType):fetchUsersType => ({type: FETCH_USERS, params: {portion, sort}}),
    fetchUserById: (userId: number):fetchUserByIdType => ({type: FETCH_USER_BY_ID, userId}),
    postNewUser: (newUser: newUserType):addNewUserType => ({type: POST_NEW_USER, newUser}),
    updateUser: (userId: number, updatedUser: newUserType):updateUserType => ({
        type: UPDATE_USER, userData: {
            userId,
            updatedUser
        }
    }),
    deleteUser: (userId: number):deleteUserType => ({type: DELETE_USER, userId})
}

export function* UsersSaga() {
    yield takeEvery(FETCH_USERS, fetchUsers);
    yield takeEvery(FETCH_USER_BY_ID, fetchUserById)
    yield takeEvery(POST_NEW_USER, addNewUser)
    yield takeEvery(UPDATE_USER, updateUser)
    yield takeEvery(DELETE_USER, deleteUser)
}
