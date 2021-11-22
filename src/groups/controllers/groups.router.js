import { Router } from 'express';
import { controllers } from './groups.controller.js';

const groupsRouter = Router();

groupsRouter
    .get('/', controllers.getUsers)
    .post('/', controllers.addUser);

groupsRouter
    .put('/updateUser/:id', controllers.updateUser);

groupsRouter
    .get('/:id', controllers.getUser)
    .delete('/:id', controllers.deleteUser);

export default groupsRouter;
