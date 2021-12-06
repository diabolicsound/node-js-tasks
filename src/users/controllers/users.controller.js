import { usersList } from '../services/users.service.js';
import { infoMiddleware } from '../../log-middlewares/info.log.middleware.js';
import { errorMiddleware } from '../../log-middlewares/error.log.middleware.js';

import { userMethods } from '../constants/users.constants.js';

export const controllers = {
    getUsers: async (req, res) => {
        const { params } = req;
        infoMiddleware(req);

        try {
            res.json(await usersList.getUsers());
        } catch (e) {
            errorMiddleware(e, userMethods.getUsers, params, res);
        }
    },

    addUser: async (req, res) => {
        const { params } = req;
        infoMiddleware(req);

        const newUser = req.body;
        try {
            res.json(await usersList.createUser(newUser));
        } catch (e) {
            errorMiddleware(e, userMethods.getUsers, params, res, true);
        }
    },

    getAutoSuggestUsers: async (req, res) => {
        const { query } = req;
        infoMiddleware(req);

        try {
            res.json(await usersList.getAutoSuggestUsers(req.query.loginSubstring, req.query.limit));
        } catch (e) {
            errorMiddleware(e, userMethods.getAutoSuggestUsers, query, res);
        }
    },

    updateUser: async (req, res) => {
        const { params } = req;
        const updates = req.body;
        const { id } = params;
        infoMiddleware(req);

        try {
            res.json(await usersList.updateUser(id, updates));
        } catch (e) {
            errorMiddleware(e, userMethods.getUsers, params, res, true);
        }
    },

    getUser: async (req, res) => {
        const { params } = req;
        infoMiddleware(req);

        try {
            res.json(await usersList.getUser(params.id));
        }  catch (e) {
            errorMiddleware(e, userMethods.getUser, params, res);
        }
    },

    deleteUser: async (req, res) => {
        const { params } = req;
        infoMiddleware(req);

        try {
            res.json(await usersList.removeUser(params.id));
        } catch (e) {
            errorMiddleware(e, userMethods.deleteUser, params, res);
        }
    }
};
