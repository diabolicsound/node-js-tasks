import { Router } from 'express';
import { controllers } from './authorization.controller.js';

const authorizationRouter = Router();

authorizationRouter.post('/', controllers.login);

export default authorizationRouter;
