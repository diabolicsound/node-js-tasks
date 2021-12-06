import express  from 'express';
import usersRouter from './users/controllers/users.router.js';
import groupsRouter from './groups/controllers/groups.router.js';
import logger from './log-middlewares/logger.js';
import { methodErrorHandler } from "./log-middlewares/error.log.middleware.js";

const app = express();
const port = 5432;

app.use(express.json());

app.use('/users', usersRouter);
app.use('/groups', groupsRouter);
app.use('/', methodErrorHandler);

app.listen(port, () => {
    logger.info(`Server is running at http://localhost:${port}`);
});

process
    .on('unhandledRejection', (reason, p) => {
        logger.error('Unhandled Rejection at Promise', { reason, promise: p });
    })
    .on('uncaughtException', err => {
        logger.error('Uncaught Exception throw', err);
        process.exit(1);
    });
