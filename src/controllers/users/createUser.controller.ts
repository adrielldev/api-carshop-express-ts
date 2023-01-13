import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import { IUserCreateUpdate } from "../../interfaces/users";
import { createUserService } from "../../services/users/createUser.service";

export const createuserController = async (req: Request, res: Response) => {
  try {
    const userData:IUserCreateUpdate = req.body;

    const user = await createUserService(userData);

    return res.json({ user });
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};
