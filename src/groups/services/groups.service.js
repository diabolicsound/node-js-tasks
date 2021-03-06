import { Group } from '../models/groups.model.js';
import { User } from '../../users/models/users.model.js';

class GroupService {
    constructor(GroupModel) {
        this.GroupModel = GroupModel;
    }

    getGroups() {
        return this.GroupModel.findAll().then(res => {
            return res;
        });
    }

    getGroup(id) {
        return this.GroupModel.findOne({ where: { id } }).then(res => res);
    }

    removeGroup(id) {
        this.GroupModel.destroy({ where: { id } }).then(res => res);
        return this.GroupModel.findOne({ where: { id } }).then(res => res);
    }

    createGroup(groupData) {
        return this.GroupModel.create(groupData).then(res => {
            return res;
        });
    }

    updateGroup(id, updates) {
        return this.GroupModel.update(updates, { where: { id } }).then(res => res);
    }

    getUserGroups(id) {
        return this.GroupModel.findOne({ where: { id }, include: [{
            model: User,
            attributes: ['id', 'login'],
            as: 'users'
        }] }).then(res => res);
    }
}

export const groupsList = new GroupService(Group);
