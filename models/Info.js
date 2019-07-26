const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InfoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: String,
    assigned: Boolean,
    mutualExclusives: [{
        type: Schema.Types.ObjectId, 
        ref: "Info"
    }],
});

var Info = mongoose.model('Info', InfoSchema)
module.exports = Info