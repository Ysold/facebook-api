import { Router } from 'express';
import * as UserController from '../../controllers/user.controller';

const api = Router();

api.get('/:id/post', UserController.returnPost);
api.get('/:id/profile', UserController.returnProfile);
api.patch('/:id/profile', UserController.updateProfile);
api.delete('/:id', UserController.deleteProfile);

export default api;