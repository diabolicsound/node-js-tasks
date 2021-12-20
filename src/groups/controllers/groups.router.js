import { Router } from 'express';
import { controllers } from './groups.controller.js';
import { checkToken } from '../../middlewares/authorization.middleware.js';

const groupsRouter = Router();

groupsRouter
    .get('/', checkToken, controllers.getGroups)
    .post('/', checkToken, controllers.createGroup);

groupsRouter
    .get('/userGroups/:id', checkToken, controllers.getUserGroups)
    .put('/updateGroup/:id', checkToken, controllers.updateGroup);

groupsRouter
    .get('/:id', checkToken, controllers.getGroup)
    .delete('/:id', checkToken, controllers.removeGroup);

export default groupsRouter;
