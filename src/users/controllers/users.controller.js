import { usersList } from '../services/users.service.js';

export const controllers = {
    getUsers: async (req, res) => {
        res.json(await usersList.getUsers());
    },

    addUser: async (req, res) => {
        const newUser = req.body;
        res.json(await usersList.createUser(newUser));
    },

    getAutoSuggestUsers: async (req, res) => {
        res.json(await usersList.getAutoSuggestUsers(req.query.loginSubstring, req.query.limit));
    },

    updateUser: async (req, res) => {
        const updates = req.body;
        const { id } = req.params;
        res.json(await usersList.updateUser(id, updates));
    },

    getUser: async (req, res) => {
        res.json(await usersList.getUser(req.params.id));
    },

    deleteUser: async (req, res) => {
        res.json(await usersList.removeUser(req.params.id));
    }
};
