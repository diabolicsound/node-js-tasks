import { Router } from 'express';
import { usersList } from './user.js';
import {  userValidationSchema } from './user-schema.js';
import { validateSchema } from './validation-schema.js';
import { newUserRequest, updateUserRequest } from './user-requests.js';

const router = Router();

router
    .get('/users', newUserRequest, (req, res) => {
        res.json(usersList.getUsers());
    })
    .post('/users', newUserRequest, validateSchema(userValidationSchema), (req, res) => {
        const newUser = req.body;
        res.json(usersList.createUser(newUser));
    });

router
    .get('/:id', (req, res) => {
        res.json(usersList.getUser(req.params.id));
    })
    .delete('/:id', (req, res) => {
        res.json(usersList.removeUser(req.params.id));
    });

router
    .get('/autosuggest', (req, res) => {
        res.json(usersList.getAutoSuggestUsers(req.query.loginSubstring, req.query.limit));
    })
    .put('/updateUser/:id', updateUserRequest, validateSchema(userValidationSchema), (req, res) => {
        const updates = req.body;
        const { id } = req.params;
        res.json(usersList.updateUser(id, updates));
    });

export default router;
