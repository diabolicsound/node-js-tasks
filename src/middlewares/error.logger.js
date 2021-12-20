import logger from './logger.js';

export function errorLogger(error, methodName, args, res, validationError) {
    const { message } = error;
    logger.error(message, { methodName, arguments: args });
    if (!validationError) {
        res.status(500).send('Internal Server Error');
    }
}
