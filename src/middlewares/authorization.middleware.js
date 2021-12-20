import jwt from 'jsonwebtoken';

export const checkToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, 'super_private_key', err => {
            if (err) {
                res.status(403).send('Failed to authenticate token.');
            }
            next();
        });
    } else {
        res.status(401).send('No token provided.');
    }
};
