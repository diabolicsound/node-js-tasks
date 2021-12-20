import express  from 'express';
import cors from 'cors';
import usersRouter from './users/controllers/users.router.js';
import groupsRouter from './groups/controllers/groups.router.js';
import logger from './middlewares/logger.js';
import authorizationRouter from './authorization/controllers/authorization.router.js';
import { errorMiddleware } from './middlewares/app.middleware.js';

const app = express();
const port = 5432;

const corsOptions = {
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false,
    'optionsSuccessStatus': 204
};

app.use(express.json());

app.use(cors(corsOptions));

app.use('/authenticate', authorizationRouter);
app.use('/users', usersRouter);
app.use('/groups', groupsRouter);
app.use(errorMiddleware);

app.listen(port, () => {
    logger.info(`Server is running at http://localhost:${port}`);
});

process
    .on('unhandledRejection', (reason, p) => {
        logger.error('Unhandled Rejection at Promise', { reason, promise: p });
        process.exit(1);
    })
    .on('uncaughtException', err => {
        logger.error('Uncaught Exception throw', err);
        process.exit(1);
    });
