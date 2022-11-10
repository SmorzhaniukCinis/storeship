import {newProduct, productType, sortType} from "../../API/types/productsType";
import {
    DELETE_PRODUCT,
    FETCH_CATEGORIES,
    FETCH_CATEGORY_PRODUCT,
    FETCH_PRODUCT_BY_ID,
    FETCH_PRODUCTS,
    POST_NEW_PRODUCT, UPDATE_PRODUCT
} from "./productsActionTypes";

export interface initialStateType {
    products: productType[]
    currentProduct: productType | null
    categories: string[]
}

export type fetchProductsType = {
    type: typeof FETCH_PRODUCTS
    params: {portion: number | undefined, sort: sortType | undefined}
}
export type fetchProductByIdType = {
    type: typeof FETCH_PRODUCT_BY_ID
    productId: number
}
export type fetchCategoriesType = {
    type: typeof FETCH_CATEGORIES
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









