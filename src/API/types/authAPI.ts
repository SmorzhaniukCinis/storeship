import {instance} from "../index";
import {authData} from "./authTypes";

export const authAPI = {
    authUser: async (authData: authData): Promise<string> => {
        const {data} = await instance.post<{token:string}>(`auth/login`, authData)
        return data.token
    }
}