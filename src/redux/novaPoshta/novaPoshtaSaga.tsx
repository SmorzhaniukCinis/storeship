import {call, put, takeEvery} from 'redux-saga/effects'
import {fetchSettlementsType} from "./types";
import {setSettlements} from "./novaPoshtaSlise";
import {SEARCH_SETTLEMENT} from "./novaPoshtaActionTypes";
import {throwSomeError} from "../app/appSlise";
import {novaPoshtaAPI} from "../../API/novaPoshtaAPI";
import {settlement} from "../../API/types/novaPoshta";


function* fetchSettlements(action: fetchSettlementsType) {
    try {
        const settlements: settlement[] = yield call(() => novaPoshtaAPI.searchSettlements(action.settlement));
        yield put(setSettlements(settlements));
    } catch (e: any) {
        yield put(throwSomeError(e.message));
    }
}

export const novaPoshtaSagaActions = {
    fetchSettlements: (settlement: string): fetchSettlementsType => ({type: SEARCH_SETTLEMENT, settlement}),

}

export function* NovaPoshtaSaga() {
    yield takeEvery(SEARCH_SETTLEMENT, fetchSettlements);

}
