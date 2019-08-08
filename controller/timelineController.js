const db = require('../models');

let controller = {
    createTimeline: function(req, res) {
        db.Timeline.create(req.body)
            .then(dbTimeline => {
                db.User.findOneAndUpdate({name: req.params.user}, { $push: { timelines: dbTimeline._id} }, { new: true })
                res.json(dbTimeline); console.log(dbTimeline)})
            .catch(err => res.status(422).json(err))
    },
    deleteTimeline: function(req, res) {
        db.Timeline.findByIdAndDelete(req.params.id)
            .catch(err => res.status(422).json(err))
    },
    readOne: function(req, res) {
        console.log(req.params.id)
        db.Timeline.findById(req.params.id)
        .populate({
            path: 'events',
            populate: {
                path: 'assocInfo',
                model: "Info"
            }
            })
            .then(dbTimeline => {res.json(dbTimeline); console.log(dbTimeline)})
            .catch(err => res.status(422).json(err))
    },
    readAll: function(req, res) {
        db.User.findOne({name: req.params.user})
        .populate({
            path: "timelines",
            populate: {
                path: 'events',
                model: 'Event'
            }
        })
        .then(dbUser => {
        res.json(dbUser.timelines)    
        })
        .catch(err => res.status(422).json(err))
    },
    updateTimeline: function(req, res) {
        db.Timeline.findByIdAndUpdate(req.params.id, req.body)
            .then(dbTimeline => {res.json(dbTimeline); console.log(dbTimeline)})
            .catch(err => res.status(422).json(err))
    },
 }

 module.exports = controller; 