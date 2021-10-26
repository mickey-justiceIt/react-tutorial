const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quanity: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  saleDate: {
    type: Number,
    default: Date.now(),
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("sales", saleSchema);
