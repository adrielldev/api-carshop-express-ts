import { AppError } from "../../errors/appError";
import prisma from "../../prisma";

const deleteAnuncioService = async (id: string): Promise<void> => {
  const findAnnounce = await prisma.announce.findFirst({
    where: {
      id,
    },
  });
  
  if (findAnnounce){
    const deleting = await prisma.announce.delete({
        where: {
          id,
        },
      });
  }else {
    throw new AppError("Field error...", 400);
  }

}
export default deleteAnuncioService;
