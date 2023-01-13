import { Router } from "express";
import createAnuncioController from "../../controllers/anuncios/createAnuncio.controller";
import deleteAnuncioController from "../../controllers/anuncios/deleteAnuncio.controller";
import readAllAnuncioController from "../../controllers/anuncios/readAllAnuncio.controller";
import readOneAnuncioController from "../../controllers/anuncios/readOneAnuncio.controller";
import { authTokenMiddleware } from "../../middlewares/authToken.middleware";
import updateAnuncioController from "../../controllers/anuncios/updateAnuncio.controller";
import { createCommentController } from "../../controllers/comments/createComment.controller";

const announce = Router();

const announcementsRouter = () => {
  announce.post("", authTokenMiddleware, createAnuncioController);
  announce.post("/:id", authTokenMiddleware, createCommentController);
  announce.get("", readAllAnuncioController);
  announce.get("/:id", readOneAnuncioController);
  announce.delete("/:id", authTokenMiddleware, deleteAnuncioController);
  announce.patch("/:id", authTokenMiddleware, updateAnuncioController);

  return announce;
};

export default announcementsRouter;
