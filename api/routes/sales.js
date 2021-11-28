const express = require("express");
const controller = require("../controllers/sales");
const router = express.Router();

router.post("/", controller.sale);

module.exports = router;
