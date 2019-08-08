const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    info: [{type: Schema.Types.ObjectId, ref: "Info"}],
    events: [{type: Schema.Types.ObjectId, ref: "Event"}],
    timelines: [{type: Schema.Types.ObjectId, ref: "Timeline"}]
});

var User = mongoose.model('User', UserSchema)
module.exports = User;