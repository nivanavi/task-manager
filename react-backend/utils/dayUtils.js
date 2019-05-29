import mongoose from 'mongoose';
import '../models/dayPlan';

const dayPlan = mongoose.model('dayPlan');


export function getAllPlanGroup() {
    return dayPlan.find();
}

// export function createDayPlan(data) {
//     const group = new dayPlan({
//         start: data.start,
//         id: data.id,
//         tasks: data.tasks
//     });
//
//     return group.save();
// }


export function dropTask(id, data) {
    return dayPlan.findOneAndUpdate({ id: id}, {$set: {tasks: data}}).exec()
}


