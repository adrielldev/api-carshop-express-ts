import { Announce } from "@prisma/client";
import { AppError } from "../../errors/appError";
import { IAnuncioCreateUpdate } from "../../interfaces/anuncios";
import prisma from "../../prisma";

const readOneAnuncioService = async (id: string):Promise<any> => {
  try {
    const announce = await prisma.announce.findFirst({
      where: {
        id,
      },
    });
    return announce;
  } catch (error) {
    if (error instanceof AppError) {
      throw new AppError("Could not find announce", 404);
    }
  }
};

export default readOneAnuncioService;
