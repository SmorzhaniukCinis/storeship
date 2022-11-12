import {RootState} from "../store";

export const appSelectors = {
    selectToken: (state: RootState) => state.appData.token,
    selectErrorMessage: (state: RootState) => state.appData.errorMessage,
    selectIsLigthTheme: (state: RootState) => state.appData.isLightTheme,
    selectIsLoading: (state: RootState) => state.appData.isLoading
}