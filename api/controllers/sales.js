const Product = require("../models/Product");
const Sale = require("../models/Sale");
const errorHandler = require("../utils/errorHandler");

module.exports.sale = async (req, res) => {
  const sale = await new Product.findByIdAndUpdate(
    { _id: req.params.id },
    {
      quanity: req.body.quanity,
      saleDate: req.body.saleDate,
    }
  );
  try {
    await sale.save();
    res.status(200).json(sale);
  } catch (e) {
    errorHandler(res, e);
  }
};
