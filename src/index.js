import express, { Router }  from "express";
import { usersList } from './user.js';

const app = express();
const router = Router();
const port = 10553;

router.get('/', function (req, res) {
    res.json(usersList.showUsers());
}).post('/', function (req, res) {
    res.json(usersList.createUser());
});

router.get('/:id', function (req, res) {
    res.json(usersList.getUser(req.params.id))
}).delete('/:id', function (req, res) {
    res.json(usersList.removeUser(req.params.id))
});

app.use('/', router)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
});
