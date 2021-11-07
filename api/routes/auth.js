const express = require("express");
const controller = require("../controllers/auth");
const router = express.Router();

router.get("/", controller.getUser);
router.patch("/", controller.updateUser);
router.post("/login", controller.login);
router.post("/register", controller.register);

module.exports = router;
