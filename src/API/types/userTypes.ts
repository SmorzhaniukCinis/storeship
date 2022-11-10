export type userType = {
    email: string
    id:number
    name: {firstname:string, lastname:string}
    password:string
    phone:string
    username:string
    address: addressType
}
export type addressType = {
    city: string
    geolocation: {lat: string, long: string}
    number: number
    street: string
    zipcode: string
}
export type newUserType = {
    email: string
    name: {firstname:string, lastname:string}
    password:string
    phone:string
    username:string
    address: addressType
}