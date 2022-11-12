import {RootState} from "../store";

export const appSelectors = {
    selectToken: (state: RootState) => state.appData.token,
    selectErrorMessage: (state: RootState) => state.appData.errorMessage,
    selectTheme: (state: RootState) => state.appData.isLightTheme
}