const express = require("express");
const controller = require("../controllers/auth");
const router = express.Router();

router.post("/", controller.getUser);
router.patch("/", controller.updateUserInfo);
router.post("/login", controller.login);
router.post("/register", controller.register);

module.exports = router;
