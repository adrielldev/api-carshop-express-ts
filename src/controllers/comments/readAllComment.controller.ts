import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import readAllCommentsService from "../../services/comments/readAllComments.service";

const readAllCommentController = async (req: Request, res: Response) => {
  try {
    const comments = await readAllCommentsService();
    return res.status(200).json(comments);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};
export default readAllCommentController;
