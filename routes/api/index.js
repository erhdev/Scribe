/*
middle block of the api route pyramid
exports into /routes/index.js
*/
const path = require("path");
const router = require("express").Router();
const eventRoutes = require("./event");
const timelineRoutes = require("./timeline");
const infoRoutes = require("./info")
/*
layers on the event and timeline addresses to the 
routes
*/
router.use("/event", eventRoutes);
router.use("/timeline", timelineRoutes);
router.use("/info", infoRoutes)

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../test/index.html"));
});

module.exports = router;
