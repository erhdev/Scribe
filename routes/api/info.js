/*
building block of the api pyramid
calls methods exported from the controller folder
in this file calls all info methods
exports into the /api/index.js file
*/
const router = require("express").Router();
const infoController = require("../../controller/infoController");

// Matches with "/api/info"
router.route("/")
  .get(infoController.readAll)
  .post(infoController.createInfo);

// Matches with "/api/info/:id"
router.route("/:id")
  .get(infoController.readOne)
  .put(infoController.updateInfo)
  .delete(infoController.deleteInfo);

// includes the additional "session" parameter to include relevant information
router.route('/:id/:event')
  .put(infoController.pushInfo);

module.exports = router;