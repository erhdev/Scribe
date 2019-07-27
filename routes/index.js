/*
culminating point of the api-route pyramid
exports in a nice bundle to be called in the server file
*/
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

/* 
layers on the api preslash to the route
routes now look like "api/event/:id"
*/
router.use("/api", apiRoutes);

/*
for now send the test file
*/
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;