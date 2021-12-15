import { groupsList } from '../services/groups.service.js';
import { infoLogger } from '../../log-middlewares/info.logger.js';
import { errorLogger } from '../../log-middlewares/error.logger..js';

import { groupMethods } from '../constants/groups.constants.js';

export const controllers = {
    getGroups: async (req, res) => {
        const { params } = req;
        infoLogger(req);

        try {
            res.json(await groupsList.getGroups());
        } catch (e) {
            errorLogger(e, groupMethods.getGroups, params, res);
        }
    },

    createGroup: async (req, res) => {
        const { params } = req;
        infoLogger(req);

        const newUser = req.body;
        try {
            res.json(await groupsList.createGroup(newUser));
        } catch (e) {
            errorLogger(e, groupMethods.createGroup, params, res, true);
        }
    },

    updateGroup: async (req, res) => {
        const updates = req.body;
        const { id } = req.params;
        const { params } = req;
        infoLogger(req);

        try {
            res.json(await groupsList.updateGroup(id, updates));
        } catch (e) {
            errorLogger(e, groupMethods.updateGroup, params, res);
        }
    },

    getGroup: async (req, res) => {
        const { params } = req;
        infoLogger(req);

        try {
            res.json(await groupsList.getGroup(req.params.id));
        } catch (e) {
            errorLogger(e, groupMethods.getGroup, params, res);
        }
    },

    removeGroup: async (req, res) => {
        const { params } = req;
        infoLogger(req);

        try {
            res.json(await groupsList.removeGroup(req.params.id));
        } catch (e) {
            errorLogger(e, groupMethods.removeGroup, params, res);
        }
    },

    getUserGroups: async (req, res) => {
        const { params } = req;
        infoLogger(req);

        try {
            res.json(await groupsList.getUserGroups(req.params.id));
        } catch (e) {
            errorLogger(e, groupMethods.getUserGroups, params, res);
        }
    }
};
