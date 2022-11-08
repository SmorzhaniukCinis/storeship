import {instance} from "./index";


export const productAPI = {
    getProducts: async (productId?:number):Promise<productType[]> => {
        const {data} = await instance.get<productType[]>(`products/${productId}`)
        return data
    }
}

export type productType = {
    id: number
    title: string
    price: number
    category: category
    description: string
    image: string
    rating: {
        rate: number
        count: number
    }
}

type category =  "electronics" | "jewelery" | "men's clothing" | "women's clothing"