import logger from './logger.js';

export const errorMiddleware = (err, req, res, next) => {
    logger.error(err.message || 'Unhandled Error');
    res.status(500).send('Internal Server Error');
    next();
};
