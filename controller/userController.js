const db = require('../models');

let controller = {
    createUser: function(req, res) {
        db.User.create(req.body)
            .then(dbUser =>{res.json(dbUser); })
            .catch(err => res.status(422).json(err))
    },
    readOne: function(req, res) {
        db.User.findOne({name: req.params.name})
            .populate(
                'events'
            )
            .populate(
                'info'
            )
            .populate(
                {
                    path: 'timelines',
                    populate: {
                        path: 'events',
                        model: "Event",
                        populate:{
                            path: "assocInfo",
                            model: "Info"
                        }
                    }
                }
            )
            .then(dbUser => {res.json(dbUser); console.log(dbUser)})
            .catch(err => res.status(422).json(err))
    },
    readAll: function(req, res) {
        db.User.find()
            .then(dbUser => {res.json(dbUser); })
            .catch(err => res.status(422).json(err))
    }
}

module.exports = controller