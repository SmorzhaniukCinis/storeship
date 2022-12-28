import {newProduct, productType, sortType} from "../../API/types/productsType";
import {
    DELETE_PRODUCT, FETCH_CART_PRODUCT,
    FETCH_CATEGORY_PRODUCT,
    FETCH_PRODUCT_BY_ID,
    FETCH_PRODUCTS,
    POST_NEW_PRODUCT, UPDATE_PRODUCT
} from "./productsActionTypes";

export interface initialStateType {
    products: productType[]
    currentProduct: productType | null
    currentCategory: currentCategory
    isProductsLoading: boolean,
    sortBy: sortByTypes
}

export type sortByTypes = 'initial' | 'reverse'

export type currentCategory =  "electronics" | "jewelery" | "men's clothing" | "women's clothing"

export type fetchProductsType = {
    type: typeof FETCH_PRODUCTS
    params: {portion: number | undefined, sort: sortType | undefined}
}
export type fetchProductByIdType = {
    type: typeof FETCH_PRODUCT_BY_ID
    productId: number
}
export type fetchCartProductType = {
    type: typeof FETCH_CART_PRODUCT
    products: number[]
}
export type fetchCategoryProductsType = {
    type: typeof FETCH_CATEGORY_PRODUCT
    params: {category:string, portion:number | undefined, sort:sortType | undefined}
}
export type postNewProductType = {
    type: typeof POST_NEW_PRODUCT
    newProduct:newProduct
}
export type updateProductType = {
    type: typeof UPDATE_PRODUCT
    productData: {
        productId:number
        updatedProduct:newProduct
    }
}
export type deleteProductType = {
    type: typeof DELETE_PRODUCT
    productId:number
}









