import express  from 'express';
import router from './routes.js';

const app = express();
const port = 10553;


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

app.use(express.json());

app.use('/', router);
