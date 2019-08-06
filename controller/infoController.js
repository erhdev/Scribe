const db = require('../models');

let controller = {
    createInfo: function(req, res) {
        db.Info.create(req.body)
            .then(dbInfo =>{res.json(dbInfo); console.log(dbInfo)})
            .catch(err => res.status(422).json(err))
    },
    deleteInfo: function(req, res) {
        db.Info.findByIdAndDelete(req.params.id)
            .then(db => res.json(db))
            .catch(err => res.status(422).json(err))
    },
    readOne: function(req, res) {
        db.Info.findById(req.params.id)
            .then(dbInfo => {res.json(dbInfo); console.log(dbInfo)})
            .catch(err => res.status(422).json(err))
    },
    readAll: function(req, res) {
        db.Info.find()
            .then(dbInfo => {res.json(dbInfo); console.log(dbInfo)})
            .catch(err => res.status(422).json(err))
    },
    updateInfo: function(req, res) {
        db.Info.findByIdAndUpdate(req.params.id, req.body)
        .then(dbInfo =>{res.json(dbInfo); console.log(dbInfo)})
        .catch(err => res.status(422).json(err))
    },
    pushInfo: function(req, res) {
        db.Info.findByIdAndUpdate(req.params.id, req.body)
            .then(dbInfo =>  {
                console.log(dbInfo);
                return db.Event.findOneAndUpdate({title: req.params.event }, { $push: { assocInfo: dbInfo._id } }, { new: true })
            })
    }
 }

 module.exports = controller; 