import { announceType, vehicleType } from "@prisma/client";

export interface User {
    id?: string;
    name: string;
  }
  
  export interface AnnounceInput {
    id?: string;
    announceType: announceType;
    vehicleType: vehicleType;
    title: string;
    year: string;
    mileage: number;
    price: number;
    description: string;
    author: User;
    coverImage: string;
  }
  
  export interface CommentInput {
    id?: string;
    content: string;
    author: User;
    announce: AnnounceInput;
  }
  
  export interface Asset {
    id?: string;
    url: string;
    announce: AnnounceInput;
  }