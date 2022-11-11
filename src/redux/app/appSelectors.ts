import {RootState} from "../store";

export const appSelectors = {
    selectToken: (state: RootState) => state.authData.token,
    selectErrorMessage: (state: RootState) => state.authData.errorMessage
}