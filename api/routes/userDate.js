const express = require("express");
const controller = require("../controllers/userDate");
const router = express.Router();

router.get("/", controller.getAll);
router.post("/", controller.post);
router.patch("/", controller.update);

module.exports = router;
