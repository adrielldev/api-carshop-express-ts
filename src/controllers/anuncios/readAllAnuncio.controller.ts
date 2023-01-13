import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import readAllAnuncioService from "../../services/anuncios/readAllAnuncio.service";

const readAllAnuncioController = async (req: Request, res: Response) => {
  try {
    const announce = await readAllAnuncioService();
    return res.status(200).json(announce);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};
export default readAllAnuncioController;
