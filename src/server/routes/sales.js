const express = require("express");
const controller = require("../controllers/sales");
const router = express.Router();

router.get("/sale", controller.getAll);
router.post("/sale", controller.post);

module.exports = router;
