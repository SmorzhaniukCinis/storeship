import {RootState} from "../store";

export const appSelectors = {
    selectToken: (state: RootState) => state.appData.token,
    selectErrorMessage: (state: RootState) => state.appData.errorMessage,
    selectIsLightTheme: (state: RootState) => state.appData.isLightTheme,
    selectIsLoading: (state: RootState) => state.appData.isLoading,
    selectAdminSearch: (state: RootState) => state.appData.adminSearch,
    selectFilter: (state: RootState) => state.appData.filter,
    selectCurrentUser: (state: RootState) => state.appData.currentUser,
}