const express = require("express");
const controller = require("../controllers/products");
const router = express.Router();

router.get("/products", controller.getAll);
router.delete("/products/:id", controller.remove);
router.post("/products", controller.create);
router.patch("/products/:id", controller.update);

module.exports = router;
