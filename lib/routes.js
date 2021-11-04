import { Router } from 'express';
import { usersList } from './user.js';
import { validateSchema, validationSchema } from './validation-schema.js';
const router = Router();
router.get('/', (req, res) => {
  res.json(usersList.showUsers());
}).post('/', validateSchema(validationSchema), (req, res) => {
  res.json(usersList.createUser());
});
router.get('/:id', (req, res) => {
  res.json(usersList.getUser(req.params.id));
}).delete('/:id', (req, res) => {
  res.json(usersList.removeUser(req.params.id));
});
router.get('/:loginSubstring/:limit', (req, res) => {
  res.json(usersList.getAutoSuggestUsers(req.params.loginSubstring, req.params.limit));
}).post('/:id/:login/:password/:age/:isDeleted', validateSchema(validationSchema), (req, res) => {
  res.json(usersList.updateUser(req.params.id, req.params));
});
export default router;