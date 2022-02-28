import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createOne = async ({ message, email }) => {

  return prisma.post.create({
    data: {
      message,
      Author : {
        connect : {
          email
        }
      }
    },
  });
}

export const updatePost = async ({ id, message }) => {
  return prisma.post.update({
    where: {
      id,
    },
    data: {
      message,
    },
  });
}

export const deletePost = async (id) => {
  return prisma.post.delete({
    where: { id },
  });
}

export const returnPost = async (id) => {
  return prisma.post.returnUnique({
    where: { id },
  });
}

export const returnAllPosts = async () => {
  return prisma.post.returnMany();
}