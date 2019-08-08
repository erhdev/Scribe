const db = require('../models');

let controller = {
    createEvent: function(req, res) {
        db.Event.create(req.body)
            .then(dbEvent =>{res.json(dbEvent); })
            .catch(err => res.status(422).json(err))
    },
    deleteEvent: function(req, res) {
        db.Event.findByIdAndDelete(req.params.id)
            .then(db => res.json(db))
            .catch(err => res.status(422).json(err))
    },
    readOne: function(req, res) {
        db.Event.findById(req.params.id)
            .populate('assocInfo')
            .then(dbEvent => {res.json(dbEvent); console.log(dbEvent)})
            .catch(err => res.status(422).json(err))
    },
    readAll: function(req, res) {
        db.Event.find()
            .then(dbEvent => {res.json(dbEvent); })
            .catch(err => res.status(422).json(err))
    },
    updateEvent: function(req, res) {
        db.Event.findByIdAndUpdate(req.params.id, req.body)
        .then(dbEvent =>{res.json(dbEvent); })
        .catch(err => res.status(422).json(err))
    },
    pushEvent: function(req, res) {
        const timelineID = req.params.sessionid
        console.log(timelineID)
        db.Event.findByIdAndUpdate(req.params.id, req.body)
            .then(dbEvent =>  {
            console.log(dbEvent);
            if (typeof dbEvent.mutualExclusives !== "undefined") {
                for (let i = 0; i < dbEvent.mutualExclusives.length; i++) {
                    console.log(dbEvent.mutualExclusives[i])
                    let eventTBD = dbEvent.mutualExclusives[i].toString();
                    eventTBD.trim();
                    db.Event.findByIdAndDelete(eventTBD).then(console.log("_________________________ \n IS WORKING"));
                }
            }         
            db.Timeline.findByIdAndUpdate(timelineID, { $push: { events: req.params.id} }, { new: true }).then(dbTimeline => res.json(dbTimeline))
            })
        // include logic for detecting and deleting mutualExclusives and for pushing info here
    }
 }

 module.exports = controller; 