import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const findByCredentials = ({ email, password }) =>
  prisma.User.findFirst({
    where: {
      email,
      password,
    },
  });

export const findById = ({ id }) =>
  prisma.User.findUnique({
    where: { id },
  });

export const createOne = async ({ email, password }) =>
  prisma.User.create({
    data: {
      email,
      password,
    },
  });