import {sortType} from "./types/productsType";
import {cartType, newCartType} from "./types/cartsTypes";
import {instance} from "./index";
import {newUserType, userType} from "./types/userTypes";

export const userAPI = {
    getUsers: async (portion?:number, sort?:sortType): Promise<userType[]> => {
        const {data} = await instance.get<userType[]>(`users?limit=${portion}&sort=${sort}`)
        return data
    },
    getUserById: async (userId:number): Promise<userType> => {
        const {data} = await instance.get<userType>(`users/${userId}`)
        return data
    },
    addNewUser: async (newUser:newUserType): Promise<userType> => {
        const {data} = await instance.post<userType>(`users`, newUser)
        return data
    },
    updateUser: async (userId:number, newUser: newUserType): Promise<userType> => {
        const {data} = await instance.put<userType>(`users/${userId}`, newUser)
        return data
    },
    deleteUser: async (userId:number): Promise<userType> => {
        const {data} = await instance.delete<userType>(`users/${userId}`)
        return data
    },
}