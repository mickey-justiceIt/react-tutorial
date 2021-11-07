const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: {
    type: Number,
    default: Date.now(),
  },
  productName: {
    type: String,
    required: true,
  },
  store: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  remain: {
    type: Number,
    // required: true,
  },
  category: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now(),
  },
  weight: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    default: "No configured address",
  },
});

module.exports = mongoose.model("products", productSchema);
