import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import { createCommentService } from "../../services/comments/createComment.service";

type TypeAuthor = {
  id: string
}
type TypeAnnounce = string
type TypeContent = {
  content: string
}
export const createCommentController = async (req: Request, res: Response) => {
  const author:TypeAuthor = req.user;
  const announce:TypeAnnounce = req.params.id
  const {content}: TypeContent = req.body;
  try {
    const commment = await createCommentService({content, author, announce});
    return res.json({ commment });
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};
