const express = require("express");
const controller = require("../controllers/products");
const router = express.Router();

router.post("/", controller.create);
router.delete("/", controller.remove);
router.patch("/", controller.update);


module.exports = router;
