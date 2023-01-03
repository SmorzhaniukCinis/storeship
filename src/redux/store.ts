import {configureStore, ThunkAction, Action, combineReducers} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import productReducer from './products/ProductsSlice';
import {productsSaga} from "./products/productSaga";
import {all} from 'redux-saga/effects';
import usersReducer from "./users/usersSlise";
import cartReducer from "./carts/cartSlise";
import authReducer from "./app/appSlise";
import {appSaga} from "./app/appSaga";
import {UsersSaga} from "./users/usersSaga";
import {CartsSaga} from "./carts/cartsSaga";
import novaPoshtaReducer from "./novaPoshta/novaPoshtaSlise";
import {NovaPoshtaSaga} from "./novaPoshta/novaPoshtaSaga";
import persistDataReducer from "./persist/persistSlise";
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['persistentData']
}
const rootReducer = combineReducers({
    productsData: productReducer,
    usersData: usersReducer,
    cartsData: cartReducer,
    appData: authReducer,
    novaPoshtaData: novaPoshtaReducer,
    persistentData: persistDataReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware()


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]},
        thunk: false
    }).concat(sagaMiddleware)
})


export let persistor = persistStore(store)

export default function* rootSaga() {
    yield all([
        productsSaga(),
        appSaga(),
        UsersSaga(),
        CartsSaga(),
        NovaPoshtaSaga()
    ])
}

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
