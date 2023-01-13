import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../../errors/appError";
import prisma from "../../prisma";
import { IUserCreateUpdate, IUserLogin } from "../../interfaces/users";
import { compare } from "bcrypt";

export const createLoginService = async ({ email, password }: IUserLogin): Promise<string>  =>  {
  const user = await prisma.user.findFirst({where:{email:email}})
  if (!user) {
    throw new AppError("User is not find", 400);
  }else {
    const checkPassword = await compare(password, user.password)
    if(!checkPassword){
      throw new AppError("invalid credential", 400);
    }
    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.SECRET_KEY as string,
      {
        subject: user.id,
        expiresIn: "2h",
      }
    );
    return token;
  }
};
