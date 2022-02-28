import * as PostModel from '../models/post.model'
import  jwt  from 'jsonwebtoken'

export const createOne = async (request, response) => {
    const { message } = request.body;
    const { authorization: token } = request.headers;
  
    const user = jwt.verify(token, 'SECRET');
    const email = String(user.email);
  
    const Post = await PostModel.createOne({
      message,
      email,
    });
  
    response.status(201).json({ post: Post });
}
  
export const returnPost = async (request, response) => {
    const id = Number(request.params.id);
  
    response.json({
      post: await PostModel.returnPost(id),
    })
}
  
export const returnAllPosts = async (_request, response) => {
    response.json({
      posts: await PostModel.returnAllPosts(),
    });
}
  
export const updatePost = async (request, response) => {
    const { id } = request.params;
    const { message } = request.body;
  
    const Post = await PostModel.updatePost({
      id: Number(id), 
      message,
    });
  
    response.json({ post: Post });
}
  
export const deletePost = async (request, response) => {
    const id = Number(request.params.id);
    
    await PostModel.deletePost(id);
  
    response.status(204).end();
}