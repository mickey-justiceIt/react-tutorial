const express = require("express");
const controller = require("../controllers/analytics");
const router = express.Router();

router.get("/analytics", controller.getAll);

module.exports = router;
