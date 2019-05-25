import express from 'express'
import bodyParser from 'body-parser';
import * as db from '../utils/dbUtils';

const router = express.Router();
const app = express();

db.setUpConnection();

app.use( bodyParser.json() );

app.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res) => {
    db.getAllGroups().then(data => res.json(data));
});

router.post('/', (req, res) => {
    db.createGroup(req.body).then(data => res.send(data))
});

router.post('/groupMini/:id', (req, res) => {
    db.groupMini(req.params.id).then(data => res.send(data))
});

router.post('/addTaskToGroup/:id', (req, res) => {
    db.addTaskToGroup(req.params.id, req.body).then(data => res.send(data))
});

router.post('/deleteTask/:id', (req, res) => {
    db.addTaskToGroup(req.params.id, req.body).then(data => res.send(data))
});

router.post('/sortTask/:id', (req, res) => {
    db.addTaskToGroup(req.params.id, req.body).then(data => res.send(data))
});

router.delete('/:id', (req, res) => {
    db.deleteGroup(req.params.id).then(data => res.send(data))
});

module.exports = router;
