export interface IUserCreateUpdate {
    name: string
    email: string
    cpf: string
    birthDate: Date
    bio: string
    address: any
    accountType: string
    password: string
}
export interface IUserLogin {
    email:string
    password:string
}