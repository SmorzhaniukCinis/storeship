import {RootState} from "../store";

export const novaPoshtaSelectors = {
    selectCurrentCart: (state: RootState) => state.novaPoshtaData.settlements,
}