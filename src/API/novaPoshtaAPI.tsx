import {settlement, postCommonRes, postDepartment} from "./types/novaPoshta";
import axios from "axios";

export const novaPoshtaAPI = {
    searchSettlements: async (Settlement: string): Promise<settlement[]> => {
        const {data} = await axios.post<postCommonRes<settlement>>('https://api.novaposhta.ua/v2.0/json/',
            {
                "apiKey": "f0650fa9d8cf60382781349eda3658d4",
                "modelName": "Address",
                "calledMethod": "getCities",
                "methodProperties": {
                    "FindByString": Settlement,
                    "Warehouse": "1",
                    "Page": "1",
                    "Limit": "5"
                }
            })
        return data.data
    },
    searchPostDepartments: async (CityRef: string): Promise<postDepartment[]> => {
        const {data} = await axios.post<postCommonRes<postDepartment>>('https://api.novaposhta.ua/v2.0/json/',
            {
                "apiKey": "f0650fa9d8cf60382781349eda3658d4",
                "modelName": "Address",
                "calledMethod": "getWarehouses",
                "methodProperties": {
                    "CityRef": CityRef
                }
            })
        return data.data
    },
}