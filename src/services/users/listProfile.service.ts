import { RequestParamsId } from "../../interfaces/anuncios";
import prisma from "../../prisma";

const readAnnouncesByAuthorService = async ({ id }: RequestParamsId): Promise<any[]> => {
  const announce = await prisma.announce.findMany({
    where:{
        author:{
            id:id
        }
    },
    select:{
      id: true,
      title: true,
      year: true,
      price: true,
      mileage: true,
      description: true,
      vehicleType: true,
      announceType: true,
      galeryImage: {
        select:{
          id:  true,
          url: true
        }
      },
      coverImage: true,
      author:{
        select:{
          id: true,
          name: true,
          email: true
        }
      }
    },
  });
  return announce;
};

export default readAnnouncesByAuthorService;
