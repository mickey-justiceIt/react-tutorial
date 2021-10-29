const Product = require("../models/Product");
const Sale = require("../models/Sale");
const errorHandler = require("../utils/errorHandler");

module.exports.create = async (req, res) => {
  const product = await new Product({
    name: req.body.name,
    store: req.body.store,
    price: req.body.price,
    remain: req.body.remain,
    category: req.body.category,
    creationDate: req.body.creationDate,
    weight: req.body.weight,
    address: req.body.address,
  });
  try {
    await product.save();
    res.status(200).json(product);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.remove = async (req, res) => {
  try {
    await Product.remove({ _id: req.params.id });
    res.status(200).json({
      message: "Product deleted",
    });
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.update = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(product);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.sale = async (req, res) => {
  const sale = await Product.findOne({ _id: req.params.id });
  const saleProducts = await new Sale({
    name: sale.name,
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
