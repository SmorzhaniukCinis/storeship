import {call, put, takeEvery} from 'redux-saga/effects'
import {productAPI} from "../../API/productAPI";
import {
    addNewProduct,
    deleteProductFromState,
    setCurrentProduct,
    setIsProductsLoading,
    setProducts,
    updateProductFromState
} from "./ProductsSlice";
import {newProduct, productType, sortType} from "../../API/types/productsType";
import {
    DELETE_PRODUCT,
    FETCH_CART_PRODUCT,
    FETCH_CATEGORY_PRODUCT,
    FETCH_PRODUCT_BY_ID,
    FETCH_PRODUCT_FOR_CART,
    FETCH_PRODUCTS,
    POST_NEW_PRODUCT,
    UPDATE_PRODUCT
} from "./productsActionTypes";
import {
    deleteProductType,
    fetchCartProductType,
    fetchCategoryProductsType,
    fetchProductByForCart,
    fetchProductByIdType,
    fetchProductsType,
    postNewProductType,
    updateProductType
} from "./types";
import {throwSomeError} from "../app/appSlise";
import {setCartProducts, setCartWithProducts} from "../carts/cartSlise";
import {cartWithProductType} from "../carts/types";
import {cartProduct} from "../../API/types/cartsTypes";


function* fetchProducts(action: fetchProductsType) {
    const {portion, sort} = action.params
    try {
        yield put(setIsProductsLoading(true))
        const products: productType[] = yield call(() => productAPI.getProducts(portion, sort));
        yield put(setProducts(products));
        yield put(setIsProductsLoading(false))
    } catch (e: any) {
        yield put(throwSomeError(e.message));
    }
}

function* fetchProductById(action: fetchProductByIdType) {
    try {
        yield put(setIsProductsLoading(true))
        const product: productType = yield call(productAPI.getProductById, action.productId);
        yield put(setCurrentProduct(product));
        yield put(setIsProductsLoading(false))
    } catch (e: any) {
        yield put(throwSomeError(e.message));
    }
}

function* fetchProductForCart({cart}: fetchProductByForCart) {
    try {
        const cartWithProducts: cartWithProductType = []
        for (let i = 0; i < cart.length; i++) {
            cartWithProducts.push({
                    product: yield call(productAPI.getProductById, cart[i].productId),
                    quantity: cart[i].quantity
                }
            )
        }
        yield put(setCartWithProducts(cartWithProducts));
    } catch (e: any) {
        yield put(throwSomeError(e.message));
    }
}

function* fetchCartProducts(action: fetchCartProductType) {
    try {
        yield put(setIsProductsLoading(true))
        const cartProducts: productType[] = []
        for (let i = 0; i < action.products.length; i++) {
            cartProducts.push(yield call(productAPI.getProductById, action.products[i]))
        }
        yield put(setCartProducts(cartProducts));
        yield put(setIsProductsLoading(false))
    } catch (e: any) {
        yield put(throwSomeError(e.message));
    }
}

function* fetchCategoryProducts(action: fetchCategoryProductsType) {
    const {category, portion, sort} = action.params
    try {
        yield put(setIsProductsLoading(true))
        const products: productType[] = yield call(productAPI.getCategoryProducts, category, portion, sort);
        yield put(setProducts(products));
        yield put(setIsProductsLoading(false))
    } catch (e: any) {
        yield put(throwSomeError(e.message));
    }
}

function* postNewProduct(action: postNewProductType) {
    try {
        const product: productType = yield call(productAPI.addNewProduct, action.newProduct);
        yield put(addNewProduct(product));
    } catch (e: any) {
        yield put(throwSomeError(e.message));
    }
}

function* updateProduct(action: updateProductType) {
    const {updatedProduct, productId} = action.productData
    try {
        yield put(setIsProductsLoading(true))
        const product: productType = yield call(() => productAPI.updateProduct(productId, updatedProduct));
        yield put(updateProductFromState({productId, product}));
        yield put(setIsProductsLoading(false))
    } catch (e: any) {
        yield put(throwSomeError(e.message));
    }
}

function* deleteProduct(action: deleteProductType) {
    try {
        yield put(setIsProductsLoading(true))
        if (action.productId <= 20) {
            const product: productType = yield call(productAPI.deleteProduct, action.productId);
            yield put(deleteProductFromState({productId: product.id}));
        } else {
            yield put(deleteProductFromState({productId: action.productId}));
        }
        yield put(setIsProductsLoading(false))
    } catch (e: any) {
        yield put(throwSomeError(e.message));
    }
}


export const productsSagaActions = {
    fetchProducts: (portion?: number, sort?: sortType): fetchProductsType => ({
        type: FETCH_PRODUCTS,
        params: {portion, sort}
    }),
    fetchProductById: (productId: number): fetchProductByIdType => ({
        type: FETCH_PRODUCT_BY_ID,
        productId
    }),
    fetchProductForCart: (cart: cartProduct[]): fetchProductByForCart => ({
        type: FETCH_PRODUCT_FOR_CART,
        cart
    }),
    fetchCartProducts: (products: number[]): fetchCartProductType => ({
        type: FETCH_CART_PRODUCT,
        products
    }),
    fetchCategoryProducts: (category: string, portion?: number, sort?: sortType): fetchCategoryProductsType => ({
        type: FETCH_CATEGORY_PRODUCT,
        params: {category, portion, sort}
    }),
    postNewProduct: (newProduct: newProduct): postNewProductType => ({type: POST_NEW_PRODUCT, newProduct}),
    updateProduct: (productId: number, updatedProduct: newProduct): updateProductType => ({
        type: UPDATE_PRODUCT, productData: {
            productId,
            updatedProduct
        }
    }),
    deleteProduct: (productId: number): deleteProductType => ({type: DELETE_PRODUCT, productId})
}

export function* productsSaga() {
    yield takeEvery(FETCH_PRODUCTS, fetchProducts);
    yield takeEvery(FETCH_PRODUCT_BY_ID, fetchProductById)
    yield takeEvery(FETCH_CATEGORY_PRODUCT, fetchCategoryProducts)
    yield takeEvery(POST_NEW_PRODUCT, postNewProduct)
    yield takeEvery(UPDATE_PRODUCT, updateProduct)
    yield takeEvery(DELETE_PRODUCT, deleteProduct)
    yield takeEvery(FETCH_CART_PRODUCT, fetchCartProducts)
    yield takeEvery(FETCH_PRODUCT_FOR_CART, fetchProductForCart)
}
