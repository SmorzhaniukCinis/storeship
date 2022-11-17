import {SEARCH_SETTLEMENT,} from "./novaPoshtaActionTypes";
import {settlement} from "../../API/types/novaPoshta";

export type initialStateType = {
    settlements: settlement[],
}

export type fetchSettlementsType = {
    type: typeof SEARCH_SETTLEMENT
    settlement: string
}