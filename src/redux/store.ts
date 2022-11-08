import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import productReducer from './ProductsSlice';
import {productsSaga} from "./productSaga";
import { all } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    productsData: productReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
});

export default function* rootSaga() {
  yield all([
    productsSaga(),
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
