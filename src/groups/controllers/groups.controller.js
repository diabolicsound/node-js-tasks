import { groupsList } from '../services/groups.service.js';
import { infoMiddleware } from '../../log-middlewares/info.log.middleware.js';
import { errorMiddleware } from '../../log-middlewares/error.log.middleware.js';

import { groupMethods } from '../constants/groups.constants.js';

export const controllers = {
    getGroups: async (req, res) => {
        const { params } = req;
        infoMiddleware(req);

        try {
            res.json(await groupsList.getGroups());
        } catch (e) {
            errorMiddleware(e, groupMethods.getGroups, params, res);
        }
    },

    createGroup: async (req, res) => {
        const { params } = req;
        infoMiddleware(req);

        const newUser = req.body;
        try {
            res.json(await groupsList.createGroup(newUser));
        } catch (e) {
            errorMiddleware(e, groupMethods.createGroup, params, res, true);
        }
    },

    updateGroup: async (req, res) => {
        const updates = req.body;
        const { id } = req.params;
        const { params } = req;
        infoMiddleware(req);

        try {
            res.json(await groupsList.updateGroup(id, updates));
        } catch (e) {
            errorMiddleware(e, groupMethods.updateGroup, params, res);
        }
    },

    getGroup: async (req, res) => {
        const { params } = req;
        infoMiddleware(req);

        try {
            res.json(await groupsList.getGroup(req.params.id));
        } catch (e) {
            errorMiddleware(e, groupMethods.getGroup, params, res);
        }
    },

    removeGroup: async (req, res) => {
        const { params } = req;
        infoMiddleware(req);

        try {
            res.json(await groupsList.removeGroup(req.params.id));
        } catch (e) {
            errorMiddleware(e, groupMethods.removeGroup, params, res);
        }
    },

    getUserGroups: async (req, res) => {
        const { params } = req;
        infoMiddleware(req);

        try {
            res.json(await groupsList.getUserGroups(req.params.id));
        } catch (e) {
            errorMiddleware(e, groupMethods.getUserGroups, params, res);
        }
    }
};
