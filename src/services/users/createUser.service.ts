import prisma from "../../prisma";
import { AppError } from "../../errors/appError";
import { IUserCreateUpdate } from "../../interfaces/users";
import { hash } from "bcrypt";

export const createUserService = async ({
  name,
  email,
  cpf,
  birthDate,
  bio,
  password,
  accountType,
  address,
}: IUserCreateUpdate) => {
  const { cep, state, street, number, complement } = address;
  const userAlredyExists = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  const addressAlredyExists = await prisma.address.findFirst({
    where: {
      cep,
      state,
      complement,
      number,
      street,
    },
  });
  if (userAlredyExists) {
    throw new AppError("User alredy exists", 400);
  } else if (addressAlredyExists) {
    throw new AppError("Address alredy exists", 400);
  } else {
    const hashedPassword = await hash(password, 10);
    const newBirthDate = new Date(birthDate);
    const newUser = await prisma.user.create({
      data:{
        accountType,
        bio,
        birthDate:  newBirthDate,
        cpf,
        email,
        name,
        password: hashedPassword,
        address:{
          create:{
            cep,
            complement,
            number,
            state,
            street
          }
        },
      },
      select:{
        name:true,
        email:true,
        cpf:true,
        bio:true,
        accountType:true,
        address:{
          select:{
            street:true,
            number:true,
            complement:true,
            cep:true,
            state:true,
          }
        }
      }
    })
  
    return newUser;
  }
};
