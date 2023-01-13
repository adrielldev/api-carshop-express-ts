import prisma from "../../prisma";
import { IAnuncioCreateUpdate } from "../../interfaces/anuncios";
import { AppError } from "../../errors/appError";
import createImageService from "../imagens/createImage.service";
import { Announce } from "@prisma/client";

const createAnuncioService = async ({
  announceType,
  title,
  year,
  mileage,
  price,
  description,
  vehicleType,
  coverImage,
  galeryImage,
  author,
}: IAnuncioCreateUpdate):Promise<Announce> => {
  const coverImg = await createImageService(coverImage);
  const galeryImg = await createImageService(galeryImage);
  const user = await prisma.user.findFirst({ where: { id: author.id } });
  if (!user) {
    throw new AppError("No user found", 400);
  }
  const announce = await prisma.announce.create({
    data: {
      author:{connect:{
        id:user.id
      }},
      coverImage: coverImg.public_id,
      title: title,
      announceType: announceType,
      vehicleType:vehicleType,
      year: year,
      mileage: mileage,
      price: price,
      description: description,
    },
  });

  if (announce) {
    await prisma.asset.create({
      data: {
        url: galeryImg.public_id,
        announce: { connect: { id: announce.id } },
      },
    });
    return announce;
  }else{
    throw new AppError("something wrong...", 400)
  }
};

export default createAnuncioService;
