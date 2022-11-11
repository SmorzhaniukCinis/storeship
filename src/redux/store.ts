import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import productReducer from './products/ProductsSlice';
import {productsSaga} from "./products/productSaga";
import { all } from 'redux-saga/effects';
import usersReducer from "./users/usersSlise";
import cartReducer from "./carts/cartSlise";
import authReducer from "./app/appSlise";
import {appSaga} from "./app/appSaga";
import {UsersSaga} from "./users/usersSaga";
import {CartsSaga} from "./carts/cartsSaga";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    productsData: productReducer,
    usersData: usersReducer,
    cartsData: cartReducer,
    authData: authReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
});

export default function* rootSaga() {
  yield all([
    productsSaga(),
    appSaga(),
    UsersSaga(),
    CartsSaga()
  ])
}

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
