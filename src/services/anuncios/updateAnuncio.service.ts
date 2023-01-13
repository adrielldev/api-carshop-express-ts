import prisma from "../../prisma";
import { IAnuncioCreateUpdate, IAnuncioUpdate } from "../../interfaces/anuncios/index";
import { AppError } from "../../errors/appError";

const updateAnuncioService = async ({
  announceType,
    title,
    year,
    mileage,
    price,
    description,
    vehicleType,
    id,
}:IAnuncioUpdate):Promise<IAnuncioUpdate> => {
  const announce = await prisma.announce.findFirst({
    where: {
      id,
    },
  });

  if (announce) {
    const updatedAnnounce = prisma.announce.update({
      where: {
        id: id,
      },
      data: {
        announceType: announceType || announce?.announceType,
        title: title || announce?.title,
        year: year || announce?.year,
        mileage: mileage || announce?.mileage,
        price: price || announce?.price,
        description: description || announce?.description,
        vehicleType: vehicleType || announce?.vehicleType,
      },
    });

    return updatedAnnounce;
  } else {
    throw new AppError("Could not find Announce", 400);
  }
};

export default updateAnuncioService;
