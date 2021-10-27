const express = require("express");
const controller = require("../controllers/products");
const router = express.Router();

router.get("/", controller.getAll);
router.delete("/", controller.remove);
router.post("/", controller.create);
router.patch("/", controller.update);

module.exports = router;
