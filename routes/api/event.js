/*
building block of the api pyramid
calls methods exported from the controller folder
in this file calls all event methods
exports into the /api/index.js file
*/
const router = require("express").Router();
const eventController = require("../../controller/eventController");

// Matches with "/api/event"
router.route("/:user")
  .get(eventController.readAll)
  .post(eventController.createEvent);

// Matches with "/api/event/:id"
router.route("/:id")
  .get(eventController.readOne)
  .put(eventController.updateEvent)
  .delete(eventController.deleteEvent);

// includes the additional "session" parameter to include relevant information
router.route('/:id/:sessionid')
  .put(eventController.pushEvent);

module.exports = router;