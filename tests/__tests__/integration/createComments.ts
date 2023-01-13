// import { announceType, vehicleType } from "@prisma/client";
// import prisma from "../../client";
// import { createAnnounce, createComment } from "../../functions";
// import { AnnounceInput, CommentInput } from "../../interfaces";
// import { announce, asset, comment, customer } from "../../mocks";

// beforeAll(async () => {
//   // create the customer
//   await prisma.user.createMany({
//     data: [
//       {
//         name: "Harry Potter",
//       },
//       {
//         name: "Ronaldinho Wesley",
//       },
//     ],
//   });

//   console.log("✨ 2 customers successfully created!");
// });

// afterAll(async () => {
//   await prisma.announce.deleteMany();
//   await prisma.comment.deleteMany();
//   await prisma.user.deleteMany();
// });

// it("should create 1 new user with 1 announce and 1 comment", async () => {
//   await createComment(comment);

//   const newUser = await prisma.user.findUnique({
//     where: {
//       id: "exampleId",
//     },
//   });

//   const newOrder = await prisma.announce.findFirst({
//     where: {
//       author: {
//         id: "exampleId",
//       },
//     },
//   });

//   const newComment = await prisma.comment.findFirst({
//     where: {
//       author: {
//         id: "exampleId",
//       },
//     },
//   });

//   expect(newUser).toEqual(customer);
//   expect(newOrder).toHaveProperty("authorId", "exampleId");
//   expect(newComment).toHaveProperty("authorId", "exampleId");
// });

// it("should create 1 announce with an existing user and 1 comment", async () => {
//   const findcustomer = await prisma.user.findFirst({
//     where: { name: "Harry Potter" },
//   });
//   if (findcustomer) {
//     const comment: CommentInput = {
//       content:"tem carro em cima?",
//       author: findcustomer,
//       announce:{
//         author: findcustomer,
//         announceType: announceType.VENDA,
//         vehicleType: vehicleType.CARRO,
//         description: "celta de 2019, bateu só uma vez",
//         mileage: 2000.2,
//         price: 3000.0,
//         title: "celta 2019 batido",
//         year: "2019",
//         coverImage: "",
//       }
//     };
//     await createComment(comment);
//   }
//   const newComment = await prisma.comment.findFirst({
//     where:{
//       authorId:findcustomer!.id
//     }
//   })
//   expect(newComment).toHaveProperty("authorId",findcustomer!.id);
// });
