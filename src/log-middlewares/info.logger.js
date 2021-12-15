import logger from './logger.js';

export function infoLogger(req) {
    const { body, headers, url, method } = req;
    logger.info('request info', { body, headers, url, method });
}
