import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import { RequestParamsId } from "../../interfaces/anuncios";
import readOneAnuncioService from "../../services/anuncios/readOneAnuncio.service";

const readOneAnuncioController = async (req: Request, res: Response) => {
  const { id }:RequestParamsId = req.params;
  try {
    const announce = await readOneAnuncioService(id);

    return res.status(200).json(announce);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};
export default readOneAnuncioController;
