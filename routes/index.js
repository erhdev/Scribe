/*
culminating point of the api-route pyramid
exports in a nice bundle to be called in the server file
*/
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const userRoutes = require("./user")
/* 
layers on the api preslash to the route
routes now look like "api/event/:id"
*/
router.use("/accounts" , userRoutes)
router.use("/api", apiRoutes);

router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/public/index.html"))
);

module.exports = router;