import { usersList } from './users.service.js';

export const controllers = {
    getUsers: (req, res) => {
        res.json(usersList.getUsers());
    },

    addUser: (req, res) => {
        const newUser = req.body;
        res.json(usersList.createUser(newUser));
    },

    getAutoSuggestUsers: (req, res) => {
        res.json(usersList.getAutoSuggestUsers(req.query.loginSubstring, req.query.limit));
    },

    updateUser: (req, res) => {
        const updates = req.body;
        const { id } = req.params;
        res.json(usersList.updateUser(id, updates));
    },

    getUser: (req, res) => {
        res.json(usersList.getUser(req.params.id));
    },

    deleteUser: (req, res) => {
        res.json(usersList.removeUser(req.params.id));
    }
};
