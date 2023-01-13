// import { announceType, vehicleType } from "@prisma/client";
// import prisma from "../../client";
// import { createAnnounce } from "../../functions";
// import { AnnounceInput, Asset } from "../../interfaces";
// import { announce, customer } from "../../mocks";

// beforeAll(async () => {
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
//   await prisma.announce.deleteMany()
//   await prisma.user.deleteMany()
// });

// it("should create 1 new user with 1 announce and 1 new image", async () => {
//   await createAnnounce(announce);
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

//   expect(newUser).toEqual(customer);
//   expect(newOrder).toHaveProperty("authorId", "exampleId");
// });

// it("should create 1 order with an existing customer", async () => {
//   const customer = await prisma.user.findFirst({
//     where: { name: "Harry Potter" },
//   });
//   if (customer) {
//     const announce: AnnounceInput = {
//       author: customer,
//       announceType: announceType.VENDA,
//       vehicleType: vehicleType.CARRO,
//       description: "celta de 2019, bateu só uma vez",
//       mileage: 2000.2,
//       price: 3000.0,
//       title: "celta 2019 batido",
//       year: "2019",
//       coverImage: "http//linkAleatorio.png",
//     };

//     await createAnnounce(announce);
//   }

//   const newOrder = await prisma.announce.findFirst({
//     where: {
//       author: {
//         name: customer!.name,
//       },
//     },
//   });

//   expect(newOrder).toHaveProperty("authorId");
// });
