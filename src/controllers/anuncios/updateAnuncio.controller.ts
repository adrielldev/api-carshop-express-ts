import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import { IAnuncioCreateUpdate, IAnuncioUpdate, RequestParamsId } from "../../interfaces/anuncios";
import updateAnuncioService from "../../services/anuncios/updateAnuncio.service";

const updateAnuncioController = async (req: Request, res: Response) => {
  const { id }:RequestParamsId = req.params;
  const {
    announceType,
    title,
    year,
    mileage,
    price,
    description,
    vehicleType,
  }: IAnuncioUpdate = req.body;
  try {
    const updatedAnnounce = await updateAnuncioService({
      announceType,
      title,
      year,
      mileage,
      price,
      description,
      vehicleType,
      id,
    });
    return res.status(200).json(updatedAnnounce);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};
export default updateAnuncioController;
