import { User } from "@prisma/client";
import { AppError } from "../../errors/appError";
import prisma from "../../prisma";

const readAllUserService = async (): Promise<any[]> => {
  const user = await prisma.user.findMany({
    select:{
      name:true,
      email:true,
      cpf:true,
      bio:true,
      accountType:true,
      address:{
        select:{
          street:true,
          number:true,
          complement:true,
          cep:true,
          state:true,
        }
      }
    },
  });
  return user;
};

export default readAllUserService;
