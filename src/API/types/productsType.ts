export type productType = {
    id: number
    title: string
    price: number
    category: string
    description: string
    image: string
    rating: {
        rate: number
        count: number
    }
}

export type sortType = 'desc' | 'asc'

export type newProduct = {
    title: string
    price: number
    description: string
    image: string
    category: string
}