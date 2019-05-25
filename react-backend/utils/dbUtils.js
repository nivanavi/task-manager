import mongoose from 'mongoose';
import '../models/group';

const Group = mongoose.model('Group');

export function setUpConnection() {
    mongoose.connect(`mongodb://localhost/group`, { useNewUrlParser: true, useFindAndModify: false});
}

export function getAllGroups() {
   return Group.find();
}


export function createGroup(data) {
    const group = new Group({
        groupName: data.groupName,
        id: data.id,
        mini: data.mini,
        tasks: data.tasks
    });

    return group.save();
}


export function deleteGroup(id) {
    const ids = id.toString();
    return Group.deleteOne({id: ids}).exec();
}

export function groupMini(id) {
    let data = id.split(',');
    return Group.findOneAndUpdate({ id: data[0]}, {$set: {mini: data[1]}}).exec()
}


export function addTaskToGroup(id, data) {
    return Group.findOneAndUpdate({ id: id}, {$set: {tasks: data}}).exec()
}

