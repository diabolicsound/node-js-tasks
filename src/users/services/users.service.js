import { Sequelize } from 'sequelize';
import { User } from '../models/users.model.js';

const { Op } = Sequelize;

class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }

    getUsers() {
        return this.userModel.findAll().then(res => {
            return res;
        });
    }

    getUser(id) {
        return this.userModel.findOne({ where: { id } }).then(res => res);
    }

    removeUser(id) {
        this.userModel.update({ isDeleted: true }, { where: { id } }).then(res => res);
        return this.userModel.findOne({ where: { id } }).then(res => res);
    }

    createUser(userData) {
        return this.userModel.create(userData).then(res => {
            return res;
        });
    }

    updateUser(id, updates) {
        return this.userModel.update(updates, { where: { id } }).then(res => res);
    }

    getAutoSuggestUsers(loginSubstring, limit) {
        return this.userModel.findAll({ where: { login: { [Op.iLike]: `%${loginSubstring}%` } }, order: [
            ['id', 'asc']
        ], limit }).then(res => {
            return res;
        });
    }
}

export const usersList = new UserService(User);
