// import prisma from "./client";
// import { AnnounceInput, Asset, CommentInput } from "./interfaces";

// export async function createAnnounce(input: AnnounceInput) {
//   const {
//     announceType,
//     description,
//     author,
//     mileage,
//     title,
//     price,
//     vehicleType,
//     year,
//     coverImage,
//   } = input;
//   const { id, name } = author;

//   if (!author) return new Error("no author");

//   await prisma.announce.create({
//     data: {
//       author: {
//         connectOrCreate: {
//           create: {
//             id,
//             name,
//           },
//           where: {
//             id,
//           },
//         },
//       },
//       description,
//       announceType,
//       mileage,
//       price,
//       title,
//       vehicleType,
//       year,
//       coverImage,
//     },
//   });
// }

// export async function createComment(input: CommentInput) {
//   const { author, content, announce } = input;
//   const { id, name } = author;
//   const {
//     announceType,
//     description,
//     mileage,
//     title,
//     price,
//     vehicleType,
//     year,
//     coverImage,
//   } = announce;

//   if (!author) return new Error("no author");

//   await prisma.comment.create({
//     data: {
//       author: {
//         connectOrCreate: {
//           create: {
//             id,
//             name,
//           },
//           where: {
//             id,
//           },
//         },
//       },
//       announce: {
//         create: {
//           author: {
//             connectOrCreate: {
//               create: {
//                 id,
//                 name,
//               },
//               where: {
//                 id,
//               },
//             },
//           },
//           description,
//           announceType,
//           mileage,
//           price,
//           title,
//           vehicleType,
//           year,
//           coverImage,
//         },
//       },
//       content,
//     },
//   });
// }

// export async function createAnnounceGalery(input: Asset) {
//   const { url, announce } = input;
//   const {
//     announceType,
//     description,
//     mileage,
//     title,
//     price,
//     vehicleType,
//     year,
//     coverImage,
//     author,
//   } = announce;
//   const { id, name } = author;
//   if (!author) return new Error("no author");

//   await prisma.asset.create({
//     data: {
//       url: "htpp://homosexualLatenteEOcioso.png",
//       announce: {
//         create: {
//           author: {
//             connectOrCreate: {
//               create: {
//                 id,
//                 name,
//               },
//               where: {
//                 id,
//               },
//             },
//           },
//           description,
//           announceType,
//           mileage,
//           price,
//           title,
//           vehicleType,
//           year,
//           coverImage,
//         },
//       },
//     },
//   });
// }
