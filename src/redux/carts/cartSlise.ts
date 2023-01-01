import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {initialStateType} from "./types";
import {cartProduct, cartType} from "../../API/types/cartsTypes";
import dayjs from "dayjs";
import {productType} from "../../API/types/productsType";


const initialState: initialStateType = {
    isLoading: false,
    carts: [],
    currentCart: null,
    cartProducts: [],
    userCart: [],
    dateRange: {
        startDate: '2000-01-01',
        endDate: dayjs(new Date()).format('YYYY-MM-DD')
    }
}

export const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        setIsCartsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setCarts: (state, action: PayloadAction<cartType[]>) => {
            state.carts = action.payload;
        },
        setCartProducts: (state, action: PayloadAction<productType[] | null>) => {
            if (action.payload) {
                state.cartProducts = action.payload
            } else {
                state.cartProducts = []
            }
        },
        setCurrentCart: (state, action: PayloadAction<cartType>) => {
            state.currentCart = action.payload;
        },
        setProductToCart: (state, action: PayloadAction<cartProduct>) => {
            state.userCart.push(action.payload)
        },
        deleteProductFromCart: (state, action: PayloadAction<{productId: number}>) => {
            state.userCart.filter(product => product.productId !== action.payload.productId)
        },
        setProductQuantity: (state, {payload}: PayloadAction<{productId: number, quantity: number}>) => {
            state.userCart.map(product => {
                if (payload.productId === product.productId) {
                    return {...product, quantity: payload.quantity}
                }
                return product
            })
        },
        setDateFilter: (state, action: PayloadAction<{ startDate?: string, endDate?: string }>) => {
            state.dateRange = {
                startDate: action.payload.startDate || state.dateRange.startDate,
                endDate: action.payload.endDate || state.dateRange.endDate
            }
        },
    },
});

export const {setCarts, setCurrentCart, setDateFilter, setIsCartsLoading, setCartProducts} = cartSlice.actions;

export default cartSlice.reducer;
