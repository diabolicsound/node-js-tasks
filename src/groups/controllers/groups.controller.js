import { groupsList } from '../services/groups.service.js';

export const controllers = {
    getUsers: async (req, res) => {
        res.json(await groupsList.getGroups());
    },

    addUser: async (req, res) => {
        const newUser = req.body;
        res.json(await groupsList.createGroup(newUser));
    },

    updateUser: async (req, res) => {
        const updates = req.body;
        const { id } = req.params;
        res.json(await groupsList.updateGroup(id, updates));
    },

    getUser: async (req, res) => {
        res.json(await groupsList.getGroup(req.params.id));
    },

    deleteUser: async (req, res) => {
        res.json(await groupsList.removeGroup(req.params.id));
    }
};
