import { GroupService } from './groups.service.js';
import { sequelize } from '../models/groups.model.js';
import SequelizeMock from 'sequelize-mock';
import 'regenerator-runtime';

const mockSequelize = new SequelizeMock();

export const dbMock = mockSequelize.define('groups');

dbMock.$queueResult([
    dbMock.build({
        'id': '123e4567-e89b-12d3-a456-426614174000',
        'name': 'group1',
        'permissions': '{READ,WRITE,DELETE,SHARE,UPLOAD_FILES}'
    }),
    dbMock.build({
        'id': '123e4567-e89b-12d3-a456-426614174001',
        'name': 'group2',
        'permissions': '{READ,WRITE,DELETE,SHARE,UPLOAD_FILES}'
    }),
    dbMock.build({
        'id': '123e4567-e89b-12d3-a456-426614174003',
        'name': 'group3',
        'permissions': '{READ,WRITE,DELETE,SHARE,UPLOAD_FILES}'
    })
]);


describe('groups.service.js', () => {
    let group;
    beforeEach(() => {
        group = new GroupService(dbMock);
    });

    afterEach(() => {
        sequelize.connectionManager.close();
    });

    test('should find and return all groups', async () => {
        const groups = await group.getGroups();
        expect(groups.length).toBe(3);
    });

    test('should find and return specific group by id', async () => {
        const specificGroup = await group.getGroup('123e4567-e89b-12d3-a456-426614174000');
        expect(specificGroup.id).toBe('123e4567-e89b-12d3-a456-426614174000');
    });

    test('should find & remove specific group', async () => {
        await group.removeGroup('123e4567-e89b-12d3-a456-426614174000');
        const groups = await group.getGroups();
        expect(groups[0].id).toBe(1);
    });

    test('should create and return specific group by id', async () => {
        const newGroupData = {
            'id': '123e4567-e89b-12d3-a456-426614174777',
            'name': 'test_group',
            'permissions': '{READ,WRITE,DELETE,SHARE,UPLOAD_FILES}'
        };
        const createdGroup = await group.createGroup({ newGroup: newGroupData });

        expect(createdGroup.newGroup.id).toBe('123e4567-e89b-12d3-a456-426614174777');
        expect(createdGroup.newGroup.name).toBe('test_group');
        expect(createdGroup.newGroup.permissions).toBe('{READ,WRITE,DELETE,SHARE,UPLOAD_FILES}');
    });
});
