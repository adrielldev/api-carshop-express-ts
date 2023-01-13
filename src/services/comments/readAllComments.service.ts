import prisma from "../../prisma";

const readAllCommentsService = async (): Promise<any[]> => {
  const comments = await prisma.comment.findMany({
    select:{
      id: true,
      content: true,
      author:{
        select:{
            id:true,
            name:true,
        }
      },
      announce:{
        select:{
            id:true,
        }
      },
      createdAt: true
    },
  });
  return comments;
};

export default readAllCommentsService;
