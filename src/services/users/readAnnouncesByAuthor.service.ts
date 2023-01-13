import { RequestParamsId } from "../../interfaces/anuncios";
import prisma from "../../prisma";

const listProfileService = async ({ id }: RequestParamsId): Promise<any[]> => {
  const profile = await prisma.user.findMany({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      bio:true,
      accountType:true,
      address:{
        select:{
          id:true,
          cep:true,
          complement:true,
          number:true,
          state:true,
          street:true,
        }
      }
    },
  });
  return profile;
};

export default listProfileService;
