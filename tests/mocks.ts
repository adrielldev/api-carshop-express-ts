import { announceType, vehicleType } from "@prisma/client";
import { AnnounceInput, Asset, CommentInput, User } from "./interfaces";

export const customer: User = {
  id: "exampleId",
  name: "Hermione Granger",
};

export const announce: AnnounceInput = {
  author: customer,
  announceType: announceType.VENDA,
  vehicleType: vehicleType.CARRO,
  description: "celta de 2019, bateu só uma vez",
  mileage: 2000.2,
  price: 3000.0,
  title: "celta 2019 batido",
  year: "2019",
  coverImage: "http//linkAleatorio.png",
};

export const asset: Asset = {
  url: "http//linkAleatorio.png",
  announce:announce
};
export const comment: CommentInput = {
  author: customer,
  content: "tem escada em cima?",
  announce: announce,
};
