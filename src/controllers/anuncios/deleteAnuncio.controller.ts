import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import { RequestParamsId } from "../../interfaces/anuncios";
import deleteAnuncioService from "../../services/anuncios/deleteAnuncio.service";

const deleteAnuncioController = async (req: Request, res: Response) => {

  
  const { id }:RequestParamsId = req.params;
  try {
    const announce = await deleteAnuncioService(id);
    return res.status(204).send({});
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};
export default deleteAnuncioController;
