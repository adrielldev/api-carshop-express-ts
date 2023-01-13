import "dotenv/config";
import { AppError } from "../../errors/appError";
import prisma from "../../prisma";
import { IComentCreateUpdate } from "../../interfaces/comments";

export const createCommentService = async ({
  content,
  author,
  announce,
}: IComentCreateUpdate) => {

  const findUser = await prisma.user.findFirst({
    where: {
      id: author.id,
    },
  });
  const findAnnounce = await prisma.announce.findFirst({
    where: {
      id: announce.id,
    },
  });
  if (!findUser) {
    throw new AppError("User is not find", 400);
  } else if (!findAnnounce) {
    throw new AppError("Announce is not find", 400);
  } else {
    const newAnnounce = await prisma.comment.create({
      data:{
        content: content,
        announce:{
          connect:{
          id:findAnnounce.id
        }},
        author:{
          connect:{
            id:findUser.id
          }
        }
      },
      select:{
        content:true,
        announce:{
          select:{
            id:true,
            title:true,
          }
        },
        author:{
          select:{
            id:true,
            name:true
          }
        }
      }
    })
    return newAnnounce
  }
};
