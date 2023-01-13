import { Router } from "express";
import { createLoginController } from "../../controllers/users/createLogin.controller";
import { createuserController } from "../../controllers/users/createUser.controller";
import listProfileController from "../../controllers/users/listProfile.controller";
import readAllUserController from "../../controllers/users/readAllUser.controller";
import readAnnouncesByAuthorController from "../../controllers/users/readAnnouncesByAuthor.controller";
import { authTokenMiddleware } from "../../middlewares/authToken.middleware";

const user = Router();

const userRouter = () => {
  user.get("/", readAllUserController);
  user.get("/announces", authTokenMiddleware, readAnnouncesByAuthorController);
  user.get("/profile", authTokenMiddleware,listProfileController);
  user.post("/register", createuserController);
  user.post("/login", createLoginController);

  return user;
};

export default userRouter;
