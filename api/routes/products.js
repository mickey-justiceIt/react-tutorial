const express = require("express");
const controller = require("../controllers/products");
const router = express.Router();

router.post("/", controller.create);
router.delete("/:id", controller.remove);
router.patch("/:id", controller.update);
router.post("/:id", controller.sale);

module.exports = router;
