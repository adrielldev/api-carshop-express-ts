import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import { IUserCreateUpdate, IUserLogin } from "../../interfaces/users";
import { createLoginService } from "../../services/users/createLogin.service";

export const createLoginController = async (req: Request, res: Response) => {
  const userData:IUserLogin = req.body;

  try {
    const token = await createLoginService(userData);

    return res.json({ token });
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};
