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

sequelize.sync();

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
    tableName: 'users',
});
