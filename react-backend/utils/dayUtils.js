import mongoose from 'mongoose';
import '../models/dayPlan';

const dayPlan = mongoose.model('dayPlan');

export function setUpConnection() {
    mongoose.connect(`mongodb://localhost/dayPlan`, { useNewUrlParser: true, useFindAndModify: false});
}

export function getAllPlanGroup() {
    return dayPlan.find();
}
