import express  from 'express';
import usersRouter from './users.router.js';

const app = express();
const port = 10553;

app.use(express.json());

app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
