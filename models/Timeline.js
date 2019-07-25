const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TimelineSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    events: [{type: Schema.Types.ObjectId, ref: "Event"}],
});

var Timeline = mongoose.model('Timeline', TimelineSchema)
module.exports = Timeline;