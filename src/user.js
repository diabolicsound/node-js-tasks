import { v4 as uuidv4 } from 'uuid';

export const users = [];
const DEFAULT_AGE = 4;

export const newUser = {
    id: uuidv4(),
    login: 'defaultLogin',
    password: 'password',
    age: 40,
    isDeleted: false
};

export const updatedUser = {
    id: uuidv4(),
    login: 'updatedLogin',
    password: 'updatedPassword',
    age: 49,
    isDeleted: false
};

class UserService {
    constructor() {
        for (let i = 0; i < 5; i++) {
            users.push({
                id: uuidv4(),
                login: i.toString(),
                password: `password${  i}`,
                age: DEFAULT_AGE + i,
                isDeleted: false
            });
        }
    }

    getUsers() {
        return users;
    }

    getUser(id) {
        return users.find((user) => user.id === id);
    }

    removeUser(id) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === id) {
                users[i].isDeleted = true;
                return users[i];
            }
        }
    }

    createUser(userData) {
        users.push(userData);
        return userData;
    }

    updateUser(id, updates) {
        const userToUpdate = users.find((user) => user.id === id);
        if (userToUpdate) {
            Object.assign(userToUpdate, updates);
            return userToUpdate;
        }
        return {
            status: 'failed',
            details: 'no user was found with this id'
        };
    }

    getAutoSuggestUsers(loginSubstring, limit) {
        return users.filter((user) => user.login.toLowerCase().includes(loginSubstring.toLowerCase()))
            .sort((a, b) => a.login - b.login)
            .slice(0, limit);
    }
}

export const usersList = new UserService();
