import { Router } from 'express';
import { controllers } from './groups.controller.js';

const groupsRouter = Router();

groupsRouter
    .get('/', controllers.getGroups)
    .post('/', controllers.createGroup);

groupsRouter
    .get('/userGroups/:id', controllers.getUserGroups)
    .put('/updateGroup/:id', controllers.updateGroup);

groupsRouter
    .get('/:id', controllers.getGroup)
    .delete('/:id', controllers.removeGroup);

export default groupsRouter;
