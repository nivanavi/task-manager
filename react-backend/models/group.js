import mongoose from "mongoose";

const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    groupName: {type: String},
    id: {type: String},
    mini: {type: Boolean},
    tasks: {type: Array},
});

const Group = mongoose.model('Group', GroupSchema);

