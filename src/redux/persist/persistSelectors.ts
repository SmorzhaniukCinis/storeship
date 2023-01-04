import {RootState} from "../store";

export const persistSelectors = {
    selectCart: (state: RootState) => state.persistentData.cart,
    selectCurrentUser: (state: RootState) => state.persistentData.currentUser
}