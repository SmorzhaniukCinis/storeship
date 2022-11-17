import {sortType} from "./types/productsType";
import {cartType, newCartType} from "./types/cartsTypes";
import {instance} from "./index";
import {settlement, settlementsRes} from "./types/novaPoshta";

export const novaPoshtaAPI = {
    searchSettlements: async (Settlement: string): Promise<settlement[]> => {
        const {data} = await instance.post<settlementsRes>('https://api.novaposhta.ua/v2.0/json/',
            {
                "apiKey": "f0650fa9d8cf60382781349eda3658d4",
                "modelName": "Address",
                "calledMethod": "getCities",
                "methodProperties": {
                    "FindByString": Settlement,
                    "Warehouse": "1",
                    "Page" : "1",
                    "Limit" : "5"
                }
            })
        return data.data
    },
}