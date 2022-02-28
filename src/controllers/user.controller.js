import * as UserModel from '../models/user.model';

export const returnPost = async (request, response) => {
    const { id } = request.body;
  
    response.json({
        posts: await UserModel.returnPost(id),
    })
}
  
export const returnProfile = async (request, response) => {
    const { id } = request.body;
    
    response.json({
        profile:await UserModel.returnProfile(id),
    })
}

export const updateProfile = async (request, response) => {
    const { id } = request.body;
    const { firstName, lastName } = request.body;

    const Profile = await UserModel.updateProfile({
        UserId: id,
        firstName,
        lastName,
    });
    response.json({ profile: Profile });
}
  
export const deleteProfile = async (request, response) => {
    const { id } = request.body;
    
    await UserModel.deleteProfile(id);
    await UserModel.deleteUser(id);
  
    response.status(204).end();
}

export const createOne = async (request, response) => {
    const { id, email, password } = request.body;

    const user = await UserModel.createOne({
      id,
      email,
      password,
    });
  
    response
      .status(201)
      .json({ data: { user } });
}

export const findAll = (_request, response) => {
    response.json({ users: UserModel.findAll() });
}

