import {RootState} from "../store";

export const cartSelectors = {
    selectCurrentCart: (state: RootState) => state.cartsData.currentCart,
    selectCarts: (state: RootState) => state.cartsData.carts
}