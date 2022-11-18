import {SEARCH_POST_DEPARTMENTS, SEARCH_SETTLEMENT,} from "./novaPoshtaActionTypes";
import {postDepartment, settlement} from "../../API/types/novaPoshta";

export type initialStateType = {
    settlements: settlement[],
    postDepartments: postDepartment[],
}

export type fetchSettlementsType = {
    type: typeof SEARCH_SETTLEMENT
    settlement: string
}
export type fetchPostDepartmentsType = {
    type: typeof SEARCH_POST_DEPARTMENTS
    CityRef: string
}