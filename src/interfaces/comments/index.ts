import { Announce, Comment, User } from "@prisma/client";

export interface IComentCreateUpdate {
    content: string
    author: any
    announce: any
}
