import logger from './logger.js';

export function errorMiddleware(error, methodName, args, res, validationError) {
    const { message } = error;
    logger.error(message, { methodName, arguments: args });
    if (!validationError) {
        res.status(500).send('Internal Server Error');
    }
}

export function methodErrorHandler(req, res) {
    logger.error('Method is not implemented');
    res.status(500).send('Internal Server Error');
}
