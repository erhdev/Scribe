const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    events: [{type: Schema.Types.ObjectId, ref: "Event"}]
});

var Event = mongoose.model('Event', EventSchema)
module.exports = Event