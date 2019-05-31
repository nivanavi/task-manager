import express from 'express'
import bodyParser from 'body-parser';
import * as db from "../utils/dayUtils";

const router = express.Router();
const app = express();

app.use( bodyParser.json() );

app.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res) => {
    db.getAllPlanGroup().then(data => res.json(data));
});

router.post('/dropTask/:id', (req, res) => {
    db.dropTask(req.params.id, req.body).then(data => res.json(data));
});


router.get('/startDb', (req, res) => {
    db.createDayPlan({
    start: '6:00',
    id: '6',
    tasks: []
});

db.createDayPlan({
    start: '8:00',
    id: '8',
    tasks: []
});

db.createDayPlan({
    start: '10:00',
    id: '10',
    tasks: []
});

db.createDayPlan({
    start: '12:00',
    id: '12',
    tasks: []
});

db.createDayPlan({
    start: '14:00',
    id: '14',
    tasks: []
});

db.createDayPlan({
    start: '16:00',
    id: '16',
    tasks: []
});

db.createDayPlan({
    start: '18:00',
    id: '18',
    tasks: []
});

db.createDayPlan({
    start: '20:00',
    id: '20',
    tasks: []
});

db.createDayPlan({
    start: '22:00',
    id: '22',
    tasks: []
})
});

module.exports = router;




// db.createDayPlan({
//     start: '6:00',
//     id: '6',
//     tasks: []
// });
//
// db.createDayPlan({
//     start: '8:00',
//     id: '8',
//     tasks: []
// })
//
// db.createDayPlan({
//     start: '10:00',
//     id: '10',
//     tasks: []
// })
//
// db.createDayPlan({
//     start: '12:00',
//     id: '12',
//     tasks: []
// })
//
// db.createDayPlan({
//     start: '14:00',
//     id: '14',
//     tasks: []
// })
//
// db.createDayPlan({
//     start: '16:00',
//     id: '16',
//     tasks: []
// })
//
// db.createDayPlan({
//     start: '18:00',
//     id: '18',
//     tasks: []
// })
//
// db.createDayPlan({
//     start: '20:00',
//     id: '20',
//     tasks: []
// })
//
// db.createDayPlan({
//     start: '22:00',
//     id: '22',
//     tasks: []
// })
