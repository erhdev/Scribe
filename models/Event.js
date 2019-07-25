const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: String,
    body: String,
    assigned: Boolean
});

var Event = mongoose.model('Event', EventSchema)
module.exports = Event