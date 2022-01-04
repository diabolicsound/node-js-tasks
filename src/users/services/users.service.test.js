import { UserService } from './users.service.js';
import { sequelize } from '../../groups/models/groups.model.js';
import SequelizeMock from 'sequelize-mock';
import { Sequelize } from 'sequelize';
import 'regenerator-runtime';

const { Op } = Sequelize;

const mockSequelize = new SequelizeMock();

export const dbMock = mockSequelize.define('user');

dbMock.$queueResult([
    dbMock.build({
        'id': '123e4567-e89b-12d3-a456-426614174000',
        'login': 'login11111',
        'password': 'pass123',
        'age': '12',
        'isDeleted': false
    }),
    dbMock.build({
        'id': '123e4567-e89b-12d3-a456-426614174001',
        'login': 'login2',
        'password': '123pass',
        'age': '23',
        'isDeleted': false
    }),
    dbMock.build({
        'id': '123e4567-e89b-12d3-a456-426614174002',
        'login': 'login3',
        'password': '321pass123',
        'age': '43',
        'isDeleted': false
    })
]);


describe('users.service.js', () => {
    let user;

    beforeEach(() => {
        user = new UserService(dbMock);
    });

    afterEach(() => {
        sequelize.connectionManager.close();
    });

    test('should find and return all users', async () => {
        const users = await user.getUsers();
        expect(users.length).toBe(3);
    });

    test('should find and return specific user by id', async () => {
        const specificUser = await user.getUser('123e4567-e89b-12d3-a456-426614174000');
        expect(specificUser.id).toBe('123e4567-e89b-12d3-a456-426614174000');
    });

    test('should find and return specific user by login', async () => {
        await user.getUsers();
        const specificUser = await user.getUserByLogin('login2');

        expect(specificUser.login).toBe('login2');
    });

    test('should remove specific user', async () => {
        const removedUser = await user.removeUser('123e4567-e89b-12d3-a456-426614174000');
        const users = await user.getUsers();

        expect(removedUser.id).toBe('123e4567-e89b-12d3-a456-426614174000');
        expect(users[0].id).toBe(3);
    });

    test('should create and return specific user by id', async () => {
        const newUserData = {
            'id': '123e4567-e89b-12d3-a456-426614174777',
            'login': 'createdUser',
            'password': '321pass123',
            'age': '26',
            'isDeleted': false
        };
        const createdUser = await user.createUser({ newUser: newUserData });

        expect(createdUser.newUser.id).toBe('123e4567-e89b-12d3-a456-426614174777');
        expect(createdUser.newUser.login).toBe('createdUser');
        expect(createdUser.newUser.age).toBe('26');
    });

    test('should update specific user except id', async () => {
        const userData = {
            'id': '123e4567-e89b-12d3-a456-426614174777',
            'login': 'updatedUser',
            'password': 'pass321',
            'age': '16',
            'isDeleted': false
        };
        const updatedUser = await user.updateUser('123e4567-e89b-12d3-a456-426614174000', userData);
        const specificUser = await user.getUser('123e4567-e89b-12d3-a456-426614174000');

        expect(updatedUser[0]).toBe(1);
        expect(specificUser.id).toBe('123e4567-e89b-12d3-a456-426614174000');
    });

    test('should match login from autoSuggest users list', async () => {
        const autoSuggestList = await user.getAutoSuggestUsers('login', 2);
        expect(autoSuggestList[0].dataValues.login).toStrictEqual({ [Op.iLike]: '%login%' });
    });
});