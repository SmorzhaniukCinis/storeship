import {call, put, takeEvery} from 'redux-saga/effects'
import {fetchPostDepartmentsType, fetchSettlementsType} from "./types";
import {setPostDepartments, setSettlements} from "./novaPoshtaSlise";
import {SEARCH_POST_DEPARTMENTS, SEARCH_SETTLEMENT} from "./novaPoshtaActionTypes";
import {throwSomeError} from "../app/appSlise";
import {novaPoshtaAPI} from "../../API/novaPoshtaAPI";
import {postDepartment, settlement} from "../../API/types/novaPoshta";


function* fetchSettlements(action: fetchSettlementsType) {
    try {
        const settlements: settlement[] = yield call(() => novaPoshtaAPI.searchSettlements(action.settlement));
        yield put(setSettlements(settlements));
    } catch (e: any) {
        yield put(throwSomeError(e.message));
    }
}
function* fetchPostDepartments(action: fetchPostDepartmentsType) {
    try {
        const postDepartments: postDepartment[] = yield call(() => novaPoshtaAPI.searchPostDepartments(action.CityRef));
        yield put(setPostDepartments(postDepartments));
    } catch (e: any) {
        yield put(throwSomeError(e.message));
    }
}

export const novaPoshtaSagaActions = {
    fetchSettlements: (settlement: string): fetchSettlementsType => ({type: SEARCH_SETTLEMENT, settlement}),
    fetchPostDepartments: (CityRef: string): fetchPostDepartmentsType => ({type: SEARCH_POST_DEPARTMENTS, CityRef}),
}

export function* NovaPoshtaSaga() {
    yield takeEvery(SEARCH_SETTLEMENT, fetchSettlements);
    yield takeEvery(SEARCH_POST_DEPARTMENTS, fetchPostDepartments);

}
