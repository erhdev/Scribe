const db = require('../models');

let controller = {
    createEvent: function(req, res) {
        db.Event.create(req.body)
            .then(dbEvent => res.json(dbEvent))
            .catch(err => res.status(422).json(err))
    },
    deleteEvent: function(req, res) {
        db.Event.findByIdAndDelete(req.params.id)
            .catch(err => res.status(422).json(err))
    },
    readOne: function(req, res) {
        db.Event.findById(req.params.id)
            .then(dbEvent => res.json(dbEvent))
            .catch(err => res.status(422).json(err))
    },
    readAll: function(req, res) {
        db.Event.find()
            .then(dbEvent => res.json(dbEvent))
            .catch(err => res.status(422).json(err))
    },
    updateEvent: function(req, res) {
        db.Event.findByIdAndUpdate(req.params.id, req.body)
        .then(dbEvent => res.json(dbEvent))
        .catch(err => res.status(422).json(err))
    }
 }

 module.exports = controller; 