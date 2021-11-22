import pkg from 'sequelize';

const { Sequelize, DataTypes } = pkg;

export const sequelize = new Sequelize({
    dialect: 'postgres',
    database: 'postgres',
    username: 'postgres',
    host: 'localhost',
    port: 10553,
    password: 'admin'
});

export const Group = sequelize.define('group', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    permissions: DataTypes.ARRAY
}, {
    timestamps: false
});

