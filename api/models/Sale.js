const mongoose = require("mongoose");
const moment = require("moment");

const Schema = mongoose.Schema;

const saleProductSchema = new Schema({
  name: {
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
  category: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    default: "No configured address",
  },
  quanity: {
    type: Number,
  },
  saleDate: {
    type: Date,
    default: moment().format("DDMMYYYY"),
  },
});

module.exports = mongoose.model("sale products", saleProductSchema);
