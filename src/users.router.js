import { Router } from 'express';
import { userValidationSchema } from './users.schema.js';
import { validateSchema } from './validation-schema.js';
import { controllers } from './users.controller.js';

const usersRouter = Router();

usersRouter
    .get('/', controllers.getUsers)
    .post('/', validateSchema(userValidationSchema), controllers.addUser);

usersRouter
    .get('/autosuggest', controllers.getAutoSuggestUsers)
    .put('/updateUser/:id', validateSchema(userValidationSchema), controllers.updateUser);

usersRouter
    .get('/:id', controllers.getUser)
    .delete('/:id', controllers.deleteUser);

export default usersRouter;
