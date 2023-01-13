import { announceType, vehicleType } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";

export interface IAnuncioCreateUpdate {
    announceType: announceType,
    title: string,
    year:string,
    mileage:Decimal,
    price:Decimal,
    description:string,
    vehicleType:vehicleType,
    id?:string,
    coverImage?: string,
    galeryImage: string,
    author: any
}

export interface IAnuncioUpdate {
    announceType?: announceType,
    title?: string,
    year?:string,
    mileage?:Decimal,
    price?:Decimal,
    description?:string,
    vehicleType?:vehicleType,
    id?:string,
    coverImage?: string,
    galeryImage?: string,
    author?: any
}

export interface RequestParamsId {
    id?:string
}