import {RootState} from "../store";

export const authSelectors = {
    selectToken: (state: RootState) => state.authData.token
}