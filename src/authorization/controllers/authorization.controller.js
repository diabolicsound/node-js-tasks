import jwt from 'jsonwebtoken';
import { usersList } from '../../users/services/users.service.js';

export const controllers = {
    login: async (req, res, next) => {
        const { login, password } = req.body;
        const user = await usersList.getUserByLogin(login);

        if (login === user.login && password === user.password) {
            const payload = { sub: user.id };
            const token = jwt.sign(payload, 'super_private_key', { expiresIn: 200 });
            res.send(token);
        } else {
            res.status(403).send('Wrong login or password.');
        }
        next();
    }
};
