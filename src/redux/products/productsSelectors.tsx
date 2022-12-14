import {RootState} from "../store";

export const productsSelectors = {
    selectCurrentProduct: (state: RootState) => state.productsData.currentProduct,
    selectProducts: (state: RootState) => state.productsData.products,
    selectIsProductsLoading: (state: RootState) => state.productsData.isProductsLoading,
    selectSortBy: (state: RootState) => state.productsData.sortBy,
    selectProductFeedback: (state: RootState) => state.productsData.productFeedback,
}