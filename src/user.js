import { v4 as uuidv4 } from "uuid";

const users = [];

class UserClass {
  constructor() {
    for (let i = 0; i < 5; i++) {
      users.push({
        id: uuidv4(),
        login: "",
        password: "",
        age: 0,
        isDeleted: false,
      });
    }
  }

  showUsers() {
    return users;
  }

  getUser(id) {
    return users.filter((user) => user.id === id);
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
    users.push({
      id: uuidv4(),
      login: "",
      password: "",
      age: 0,
      isDeleted: false,
    });
    return users;
  }

  getAutoSuggestUsers(limit) {
    users.sort((a, b) => a - b);
    users.slice(0, limit);
    return users;
  }
}

export const usersList = new UserClass();
