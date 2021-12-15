import { usersList } from '../services/users.service.js';
import { infoLogger } from '../../log-middlewares/info.logger.js';
import { errorLogger } from '../../log-middlewares/error.logger.js';

import { userMethods } from '../constants/users.constants.js';

export const controllers = {
    getUsers: async (req, res) => {
        const { params } = req;
        infoLogger(req);

        try {
            res.json(await usersList.getUsers());
        } catch (e) {
            errorLogger(e, userMethods.getUsers, params, res);
        }
    },

    addUser: async (req, res) => {
        const { params } = req;
        infoLogger(req);

        const newUser = req.body;
        try {
            res.json(await usersList.createUser(newUser));
        } catch (e) {
            errorLogger(e, userMethods.addUser, params, res, true);
        }
    },

    getAutoSuggestUsers: async (req, res) => {
        const { query } = req;
        infoLogger(req);

        try {
            res.json(await usersList.getAutoSuggestUsers(req.query.loginSubstring, req.query.limit));
        } catch (e) {
            errorLogger(e, userMethods.getAutoSuggestUsers, query, res);
        }
    },

    updateUser: async (req, res) => {
        const { params } = req;
        const updates = req.body;
        const { id } = params;
        infoLogger(req);

        try {
            res.json(await usersList.updateUser(id, updates));
        } catch (e) {
            errorLogger(e, userMethods.updateUser, params, res, true);
        }
    },

    getUser: async (req, res) => {
        const { params } = req;
        infoLogger(req);

        try {
            res.json(await usersList.getUser(params.id));
        }  catch (e) {
            errorLogger(e, userMethods.getUser, params, res);
        }
    },

    deleteUser: async (req, res) => {
        const { params } = req;
        infoLogger(req);

        try {
            res.json(await usersList.removeUser(params.id));
        } catch (e) {
            errorLogger(e, userMethods.deleteUser, params, res);
        }
    }
};
