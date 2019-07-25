const db = require('../models');

let controller = {
    createTimeline: function(req, res) {
        db.Timeline.create(req.body)
            .then(dbTimeline => {res.json(dbTimeline); console.log(dbTimeline)})
            .catch(err => res.status(422).json(err))
    },
    deleteTimeline: function(req, res) {
        db.Timeline.findByIdAndDelete(req.params.id)
            .catch(err => res.status(422).json(err))
    },
    readOne: function(req, res) {
        db.Timeline.findById(req.params.id)
            .populate('events')
            .then(dbTimeline => {res.json(dbTimeline); console.log(dbTimeline)})
            .catch(err => res.status(422).json(err))
    },
    readAll: function(req, res) {
        db.Timeline.find()
            .populate('events')
            .then(dbTimeline => {res.json(dbTimeline); console.log(dbTimeline)})
            .catch(err => res.status(422).json(err))
    },
    updateTimeline: function(req, res) {
        db.Timeline.findByIdAndUpdate(req.params.id, req.body)
            .then(dbTimeline => {res.json(dbTimeline); console.log(dbTimeline)})
            .catch(err => res.status(422).json(err))
    },
 }

 module.exports = controller; 