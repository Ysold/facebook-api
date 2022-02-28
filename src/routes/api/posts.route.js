import { Router } from 'express';
import * as PostController from '../../controllers/post.controller';

const api = Router();

api.post('/', PostController.createOne);
api.get('/:id', PostController.returnPost);
api.get('/', PostController.returnAllPosts);
api.patch('/:id', PostController.updatePost);
api.delete('/:id', PostController.deletePost);

export default api;