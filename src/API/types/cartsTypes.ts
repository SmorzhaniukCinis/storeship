export type cartType = {
    id:number
    userId:number
    date: string
    products:cartProduct[]
}
export type cartProduct = {
    productId:number
    quantity:number
}
export type newCartType = {
    userId: number
    date: string
    products: cartProduct[]
}