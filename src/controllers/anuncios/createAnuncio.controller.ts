import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import { IAnuncioCreateUpdate, RequestParamsId } from "../../interfaces/anuncios";
import createAnuncioService from "../../services/anuncios/createAnuncio.service";

const createAnuncioController = async (req: Request, res: Response) => {
  const author:RequestParamsId = req.user;
  const {
    announceType,
    title,
    year,
    mileage,
    price,
    description,
    vehicleType,
    coverImage,
    galeryImage,
  }: IAnuncioCreateUpdate = req.body;
  try {
    const announce = await createAnuncioService({
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
    });
    return res.status(201).json(announce);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};

export default createAnuncioController;
