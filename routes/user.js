const router = require("express").Router();
const userController = require("../controller/userController");

router.route("/users")
    .get(userController.readAll)
    .post(userController.createUser);
router.route("/:name")
    .get(userController.readOne)

module.exports = router