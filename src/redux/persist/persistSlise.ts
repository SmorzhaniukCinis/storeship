import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {initialStateType} from "./types";
import {cartProduct} from "../../API/types/cartsTypes";
import {userType} from "../../API/types/userTypes";


const initialState: initialStateType = {
    cart: [],
    currentUser: null
}

export const persistSlice = createSlice({
    name: 'persist',
    initialState,
    reducers: {
        updateCart: (state, {payload}: PayloadAction<cartProduct>) => {
            if (!state.cart.find(product => product.productId === payload.productId)) {
                state.cart.push(payload)
            } else {
                state.cart.forEach(function (el, i) {
                    if (el.productId === payload.productId) {
                        state.cart.splice(i, 1)
                    }
                })
            }
        },
        setProductQuantity: (state, {payload}: PayloadAction<{ productId: number, quantity: number }>) => {
            state.cart.map(product => {
                if (payload.productId === product.productId) {
                    return {...product, quantity: payload.quantity}
                }
                return product
            })
        },
        setCurrentUser: (state, action: PayloadAction<userType | null>) => {
            state.currentUser = action.payload
        },
    },
});

export const {updateCart, setProductQuantity, setCurrentUser} = persistSlice.actions;

export default persistSlice.reducer;
