import { Router } from 'express';
import AuthenticationRouters from './authentication.route';
import UserRouters from './users.route';
import PostRoutes from './posts.route';

import jwt from '../../middlewares/jwt.middleware';

const router = Router();

router.use('/v1/authentication', AuthenticationRouters);
router.use('/v1/users', jwt, UserRouters);
router.use('/v1/posts', jwt, PostRoutes);

export default router;