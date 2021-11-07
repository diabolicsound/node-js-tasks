import { newUser, updatedUser } from './user.js';

export function newUserRequest(req, res, next) {
    req.body = newUser;
    next();
}

export function updateUserRequest(req, res, next) {
    req.body = updatedUser;
    next();
}
