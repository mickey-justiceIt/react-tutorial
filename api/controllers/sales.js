const Product = require("../models/Product");
const Sale = require("../models/Sale");
const errorHandler = require("../utils/errorHandler");

module.exports.sale = async (req, res) => {
  const sale = await Product.findOne({ id: req.body.id });
  const saleProducts = await new Sale({
    id: sale.id,
    productName: sale.productName,
    store: sale.store,
    price: sale.price,
    category: sale.category,
    weight: sale.weight,
    address: sale.address,
    quanity: req.body.quanity,
    saleDate: req.body.saleDate,
  });
  try {
    await saleProducts.save();
    res.status(200).json(saleProducts);
  } catch (e) {
    errorHandler(res, e);
  }
};