import { call, put, takeEvery} from 'redux-saga/effects'
import {productAPI} from "../../API/productAPI";
import {setCategories, setCurrentProduct, setProducts} from "./ProductsSlice";
import {newProduct, sortType} from "../../API/types/productsType";

function* fetchProductById(action:any):any {
    try {
        const product = yield call(productAPI.getProductById, action.productId);
        yield put(setCurrentProduct(product));
    } catch (e:any) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}
function* fetchProducts(action:any):any {
    try {
        const products = yield call(()=>productAPI.getProducts(action.params.portion, action.params.sort));
        yield put(setProducts(products));
    } catch (e:any) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}
function* fetchCategories(action:any):any {
    try {
        const categories = yield call(productAPI.getAllCategories);
        yield put(setCategories(categories));
    } catch (e:any) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}
function* fetchCategoryProducts(action:any):any {
    const {category, portion, sort} = action.params
    try {
        const products = yield call(productAPI.getCategoryProducts, category, portion, sort);
        yield put(setProducts(products));
    } catch (e:any) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}
function* postNewProduct(action:any):any {
    try {
        const product = yield call(productAPI.addNewProduct, action.updatedProduct);
        yield put(setCurrentProduct(product));
    } catch (e:any) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}
function* updateProduct(action:any):any {
    const {newProduct, productId} = action.productData
    try {
        const product = yield call(()=>productAPI.updateProduct(productId, newProduct));
        yield put(setCurrentProduct(product));
    } catch (e:any) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}
function* deleteProduct(action:any):any {
    try {
        const product = yield call(productAPI.deleteProduct, action.productId);
        yield put(setCurrentProduct(product));
    } catch (e:any) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}


export const productsSagaActions = {
    fetchProductById: (productId:number) => ({type: 'FETCH_PRODUCT_BY_ID', productId}),
    fetchProducts: (portion?:number, sort?:sortType) => ({type: 'FETCH_PRODUCT_BY_ID', params: {portion, sort}}),
    fetchCategories: () => ({type: 'FETCH_CATEGORIES'}),
    fetchCategoryProducts: (category: string, portion?:number, sort?:sortType) => ({
        type: 'FETCH_CATEGORY_PRODUCT',
        params: {category, portion, sort}}),
    postNewProduct: ( newProduct:newProduct ) => ({type: 'POST_NEW_PRODUCT', newProduct}),
    updateProduct: (productId:number, newProduct:newProduct) => ({type: 'UPDATE_PRODUCT', productData: {
            productId,
            newProduct
        } }),
    deleteProduct: (productId:number) => ({type: 'DELETE_PRODUCT', productId})
}

export function* productsSaga() {
    yield takeEvery("FETCH_PRODUCTS_BY_ID", fetchProductById);
    yield takeEvery('FETCH_PRODUCTS', fetchProducts)
    yield takeEvery('FETCH_CATEGORIES', fetchCategories)
    yield takeEvery('FETCH_CATEGORY_PRODUCT', fetchCategoryProducts)
    yield takeEvery('POST_NEW_PRODUCT', postNewProduct)
    yield takeEvery('UPDATE_PRODUCT', updateProduct)
    yield takeEvery('DELETE_PRODUCT', deleteProduct)
}
