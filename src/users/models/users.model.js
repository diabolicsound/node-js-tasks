import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;
import { sequelize, Group } from '../../groups/models/groups.model.js';


export const User = sequelize.define('user', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
    },
    login: {
        type: DataTypes.STRING
    },
    password: DataTypes.STRING,
    age: DataTypes.BIGINT,
    isDeleted: DataTypes.BOOLEAN
}, {
    timestamps: false,
    tableName: 'users'
});

User.belongsToMany(Group, {
    as: 'groups',
    through: 'userGroups',
    onDelete: 'cascade',
    onUpdate: 'cascade'
});

Group.belongsToMany(User, {
    as: 'users',
    through: 'userGroups',
    onDelete: 'cascade',
    onUpdate: 'cascade'
});
