const Product = require("../models/Product");
const errorHandler = require("../utils/errorHandler");

module.exports.create = async (req, res) => {
  const product = await new Product({
    id: req.body.id,
    productName: req.body.productName,
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
    await Product.deleteMany({ id: req.body.id },);
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
      { id: req.body.id },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(product);
  } catch (e) {
    errorHandler(res, e);
  }
};


