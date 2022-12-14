import {RootState} from "../store";

export const cartSelectors = {
    selectCurrentCart: (state: RootState) => state.cartsData.currentCart,
    selectCarts: (state: RootState) => state.cartsData.carts,
    selectDateRange: (state: RootState) => state.cartsData.dateRange,
    selectIsCartLoading: (state: RootState) => state.cartsData.isLoading,
    selectCartProducts: (state: RootState) => state.cartsData.cartProducts,
    selectCartWithProducts: (state: RootState) => state.cartsData.cartWithProducts,
}