const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  remain: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now(),
  },
  category: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("products", productSchema);
