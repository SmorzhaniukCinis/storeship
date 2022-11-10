import {instance} from "./index";
import {authDataType} from "./types/authTypes";

export const authAPI = {
    authUser: async (authData: authDataType): Promise<string> => {
        const {data} = await instance.post<{token:string}>(`auth/login`, authData)
        return data.token
    }
}