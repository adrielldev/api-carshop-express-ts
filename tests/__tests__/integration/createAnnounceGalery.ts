// import { announceType, vehicleType } from "@prisma/client";
// import prisma from "../../client";
// import { createAnnounce, createAnnounceGalery, createComment } from "../../functions";
// import { AnnounceInput, Asset } from "../../interfaces";
// import { asset, comment, customer } from "../../mocks";

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

// it("should create 1 announce with an existing user and 1 image in the gallery", async () => {
//     const findcustomer = await prisma.user.findFirst({
//       where: { name: "Harry Potter" },
//     });
//     if (findcustomer) {
//       const asset: Asset = {
//         announce:{
//           author: findcustomer,
//           announceType: announceType.VENDA,
//           vehicleType: vehicleType.CARRO,
//           description: "celta de 2019, bateu só uma vez",
//           mileage: 2000.2,
//           price: 3000.0,
//           title: "celta 2019 batido",
//           year: "2019",
//           coverImage: "",
//         },
//         url:"http://CABAJOHOMOSEXUALDELASMONTANHAS.OOUO"
//       };
//       await createAnnounceGalery(asset);
//     }
//     const newOrder = await prisma.announce.findFirst({
//         where:{
//             authorId:findcustomer!.id
//         }
//     })
//     const newAsset = await prisma.asset.findFirst({
//       where:{
//         announceId:newOrder!.id
//       }
//     })
//     expect(newAsset).toHaveProperty("announceId",newOrder!.id);
//   });
