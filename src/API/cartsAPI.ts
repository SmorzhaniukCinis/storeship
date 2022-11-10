import {sortType} from "./types/productsType";
import {instance} from "./index";
import {cartType, newCartType} from "./types/cartsTypes";

export const cartAPI = {
    getCarts: async (portion?: number, sort?: sortType, startDate?:string, endDate?:string): Promise<cartType[]> => {
        const {data} = await instance.get<cartType[]>
        (`carts?limit=${portion}&sort=${sort}&startdate=${startDate}&enddate=${endDate}`)
        return data
    },
    getCartById: async (cartId: number): Promise<cartType> => {
        const {data} = await instance.get<cartType>(`carts/${cartId}`)
        return data
    },
    getCartsByUser: async (userId: number): Promise<cartType[]> => {
        const {data} = await instance.get<cartType[]>(`carts/user/${userId}`)
        return data
    },
    addNewCart: async (newCart: newCartType): Promise<cartType> => {
        const {data} = await instance.post<cartType>(`carts`, newCart)
        return data
    },
    updateCart: async (cartId:number, newCart: newCartType): Promise<cartType> => {
        const {data} = await instance.put<cartType>(`carts/${cartId}`, newCart)
        return data
    },
    deleteCart: async (cartId:number): Promise<cartType> => {
        const {data} = await instance.delete<cartType>(`carts/${cartId}`)
        return data
    },
}