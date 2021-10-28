const Product = require("../models/Product");
const errorHandler = require("../utils/errorHandler");

module.exports.getAll = async (req, res) => {
  try {
    const products = await Product.find({
      products: req.body.products,
      user: req.user.id,
    });
    res.status(200).json(products);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.create = async (req, res) => {
  try {
    const product = await new Product({
      id: req.body.id,
      name: req.body.name,
      store: req.body.store,
      price: req.body.price,
      remain: req.body.remain,
      category: req.body.category,
      creationDate: req.body.creationDate,
      weight: req.body.weight,
      user: req.user.id,
    }).save();
    res.status(200).json(product);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.remove = async (req, res) => {
  try {
    await Product.remove({ id: req.body.id });
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
      { _id: req.body.id },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(product);
  } catch (e) {
    errorHandler(res, e);
  }
};
