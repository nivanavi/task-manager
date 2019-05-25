import mongoose from "mongoose";

const Schema = mongoose.Schema;

const dayPlanSchema = new Schema({
    start: {type: String},
    id: {type: String},
    tasks: {type: Array}
});

const dayPlan = mongoose.model('dayPlan', dayPlanSchema);
