import { call, put, takeEvery} from 'redux-saga/effects'
import {productAPI, productType} from "../API/productAPI";
import {setProducts} from "./ProductsSlice";

function* fetchProducts(action:any):any {
    try {
        console.log(action)
        const products = yield call(productAPI.getProducts, action.productId);
        yield put(setProducts(products));
    } catch (e:any) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

export const productsActions = {
    fetchProducts: (productId?:number) => ({type: 'FETCH_PRODUCTS', productId})
}

export function* productsSaga() {
    yield takeEvery("FETCH_PRODUCTS", fetchProducts);
}
