import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import { RequestParamsId } from "../../interfaces/anuncios";
import readAllUserService from "../../services/users/readAllUser.service";
import readAnnouncesByAuthorService from "../../services/users/readAnnouncesByAuthor.service";

const readAnnouncesByAuthorController = async (req: Request, res: Response) => {
  const author: RequestParamsId = req.user;
  try {
    const user = await readAnnouncesByAuthorService(author);
    return res.status(200).json(user);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};
export default readAnnouncesByAuthorController;
