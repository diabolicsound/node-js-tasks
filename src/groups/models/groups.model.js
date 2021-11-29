import pkg from 'sequelize';

const { Sequelize, DataTypes } = pkg;

const permissions = ['READ', 'WRITE', 'DELETE', 'SHARE', 'UPLOAD_FILES'];

export const sequelize = new Sequelize({
    dialect: 'postgres',
    database: 'postgres',
    username: 'postgres',
    host: 'localhost',
    port: 10553,
    password: 'admin'
});

sequelize.sync();

export const Group = sequelize.define('group', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        unique: true,
    },
    name: {
        type: DataTypes.STRING
    },
    permissions:  {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: permissions
    }
}, {
    timestamps: false,
    tableName: 'groups',
});

