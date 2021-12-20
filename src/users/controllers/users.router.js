import { Router } from 'express';
import { userValidationSchema } from '../validation/users.schema.js';
import { validateSchema } from '../validation/validation-schema.js';
import { controllers } from './users.controller.js';
import { checkToken } from '../../middlewares/authorization.middleware.js';

const usersRouter = Router();

usersRouter
    .get('/', checkToken, controllers.getUsers)
    .post('/', checkToken, validateSchema(userValidationSchema), controllers.addUser);

usersRouter
    .get('/autosuggest', checkToken, controllers.getAutoSuggestUsers)
    .put('/updateUser/:id', checkToken, validateSchema(userValidationSchema), controllers.updateUser);

usersRouter
    .get('/:id', checkToken, controllers.getUser)
    .delete('/:id', checkToken, controllers.deleteUser);

export default usersRouter;
