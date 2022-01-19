import pkg from 'sequelize';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
const { Sequelize, DataTypes } = pkg;

const permissions = ['READ', 'WRITE', 'DELETE', 'SHARE', 'UPLOAD_FILES'];

export const sequelize = new Sequelize({
    dialect: process.env.DB_DIALECT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    password: process.env.DB_PASS
});

sequelize.sync().catch(() => {
    sequelize.close();
});

export const Group = sequelize.define('group', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        unique: true
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
    tableName: 'groups'
});
