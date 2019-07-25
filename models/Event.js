const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: String,
    assigned: Boolean,
    mutualExclusives: [{
        type: Schema.Types.ObjectId, 
        ref: "Event"
    }],
    assocInfo: [{
        type: Schema.Types.ObjectId, 
        ref: "Info"
    }]
});

var Event = mongoose.model('Event', EventSchema)
module.exports = Event