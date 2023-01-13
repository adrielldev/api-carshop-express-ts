// import prisma from "../../../client";

// export const createUserMock = {
//   id: "idteste",
//   name: "pedro",
// };
// export const updateUserMock = {
//   id: "idteste",
//   name: "Richarlison",
// };


// interface CreateUser {
 
//   name: string;
// }
// export async function createUser(user: CreateUser) {
//   return await prisma.user.create({
//     data: user,
//   });
// }

// interface UpdateUser {
//   id: string;
//   name: string;
// }

// export async function updateUsername(user: UpdateUser) {
//   return await prisma.user.update({
//     where: { id: user.id },
//     data: user,
//   });
// }