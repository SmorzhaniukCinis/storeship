import {instance} from "./index";
import {newProduct, productType, sortType} from "./types/productsType";


export const productAPI = {
    getProductById: async (productId?: number): Promise<productType> => {
        const {data} = await instance.get<productType>(`products/${productId}`)
        return data
    },
    getProducts: async (portion?: number, sort?: sortType): Promise<productType> => {
        const {data} = await instance.get<productType>(`products?limit=${portion}&sort=${sort}`)
        return data
    },
    getAllCategories: async (): Promise<string[]> => {
        const {data} = await instance.get<string[]>(`products/categories`)
        return data
    },
    getCategoryProducts: async (category: string, portion?: number, sort?: sortType): Promise<productType> => {
        const {data} = await instance.get<productType>(`products/category/${category}?limit=${portion}&sort=${sort}`)
        return data
    },
    addNewProduct: async (newProduct: newProduct): Promise<productType> => {
        const {data} = await instance.post<productType>('products', newProduct)
        return data
    },
    updateProduct: async (productId: number, updatedProduct: newProduct): Promise<productType> => {
        const {data} = await instance.put<productType>(`products/${productId}`, updatedProduct)
        return data
    },
    deleteProduct: async (productId: number): Promise<productType> => {
        const {data} = await instance.delete<productType>(`products/${productId}`)
        return data
    },

}

