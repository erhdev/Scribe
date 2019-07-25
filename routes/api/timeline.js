/*
building block of the api pyramid
calls methods exported from the controller folder
in this file calls all timeline methods
exports into the /api/index.js file
*/
const router = require("express").Router();
const timelineController = require("../../controller/timelineController");

// Matches with "/api/timeline"
router.route("/")
  .get(timelineController.readAll)
  .post(timelineController.createTimeline);

// Matches with "/api/timeline/:id"
router
  .route("/:id")
  .get(timelineController.readOne)
  .put(timelineController.updateTimeline)
  .delete(timelineController.deleteTimeline);

  module.exports = router;