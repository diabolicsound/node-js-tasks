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

export const User = sequelize.define('user', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    login: {
        type: DataTypes.STRING
    },
    password: DataTypes.STRING,
    age: DataTypes.NUMBER,
    isDeleted: DataTypes.BOOLEAN
}, {
    timestamps: false
});
