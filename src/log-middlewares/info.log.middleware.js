import logger from './logger.js';

export function infoMiddleware(req) {
    const { body, headers, url, method } = req;
    logger.info('request info', { body, headers, url, method });
}
