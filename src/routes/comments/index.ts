import { Router } from "express";
import readAllCommentController from "../../controllers/comments/readAllComment.controller";

const comments = Router();

const commentsRouter = () => {
  comments.get("/", readAllCommentController);

  return comments;
};

export default commentsRouter;
