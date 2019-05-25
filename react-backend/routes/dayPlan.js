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

module.exports = router;
