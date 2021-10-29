const express = require("express");
const controller = require("../controllers/userDate");
const router = express.Router();

router.patch("/", controller.update);

module.exports = router;
