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

class UserClass {
  constructor() {
    for (let i = 0; i < 5; i++) {
      users.push({
        id: uuidv4(),
        login: i.toString(),
        password: `password${i}`,
        age: DEFAULT_AGE + i,
        isDeleted: false
      });
    }
  }

  showUsers() {
    return users;
  }

  getUser(id) {
    return users.filter(user => user.id === id)[0];
  }

  removeUser(id) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        users[i].isDeleted = true;
        return users[i];
      }
    }
  }

  createUser() {
    users.push(newUser);
    return newUser;
  }

  updateUser(id, updates) {
    const userToUpdate = users.filter(user => user.id === id)[0];
    Object.assign(userToUpdate, updates);
    return userToUpdate;
  }

  getAutoSuggestUsers(loginSubstring, limit) {
    users.sort((a, b) => a.login - b.login);
    users.filter(({
      login
    }) => login.includes(loginSubstring));
    return users.slice(0, limit);
  }

}

export const usersList = new UserClass();