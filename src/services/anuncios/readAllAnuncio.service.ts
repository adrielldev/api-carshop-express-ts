import { Announce } from "@prisma/client";
import { AppError } from "../../errors/appError";
import prisma from "../../prisma";

const readAllAnuncioService = async (): Promise<any[]> => {
  const announce = await prisma.announce.findMany({
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

export default readAllAnuncioService;
