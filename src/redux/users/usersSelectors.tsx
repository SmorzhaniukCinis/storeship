import {RootState} from "../store";

export const usersSelectors = {
    selectCurrentUser: (state: RootState) => state.usersData.currentUser,
    selectUsers: (state: RootState) => state.usersData.users
}