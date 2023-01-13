import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import readAllUserService from "../../services/users/readAllUser.service";

const readAllUserController = async (req: Request, res: Response) => {
  try {
    const user = await readAllUserService();
    return res.status(200).json(user);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};
export default readAllUserController;
