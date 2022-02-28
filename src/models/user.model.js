import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const returnPosts = async (authorId, select) => {
  return prisma.post.findMany({
    where: { authorId },
    select,
  });
}

export const returnProfile = async (userId) => {
  return prisma.profile.findUnique({
    where: {
      userId
    }
  });
}

export const updateProfile = async ({ userId, firstName , lastName}) => {
    return prisma.profile.update({
      where: {
        userId,
      },
      data: {
        firstName,
        lastName,
      },
    });
}
  
export const deleteUser = async (id) => {
    return prisma.user.delete({
      where: { 
        id
      },
    });
}

export const createOne = async ({ email, password }) => {
    return prisma.user.create({
      data: {
        email,
        password,
        Profile: {
           create : {
             firstName : "",
             lastName: ""
           }  
        }
      },
    });
  }
  
  export const createProfile = async ({ firstName, lastName, userId }) => {
    return prisma.profile.create({
      data: {
        firstName,
        lastName,
        userId
      },
    });
  }

export const deleteProfile = async (userId) => {
    return prisma.profile.delete({
      where: { 
        userId
      },
    });
}

export const findByCredentials = ({ email, password }, select) => {
    return prisma.user.findUnique({
      where: {
        email
      },
      select,
    });
}
  
export const findById = ({ id }, select) => {
    return prisma.user.findUnique({
      where: {
        id
      },
      select,
    });
}
  
export const findAll = async () => {
    return prisma.user.findMany();
}