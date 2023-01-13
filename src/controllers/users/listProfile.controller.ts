import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import { RequestParamsId } from "../../interfaces/anuncios";
import listProfileService from "../../services/users/readAnnouncesByAuthor.service";

const listProfileController = async (req: Request, res: Response) => {
  const profile: RequestParamsId = req.user;
  try {
    const user = await listProfileService(profile);
    return res.status(200).json(user);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};
export default listProfileController;
