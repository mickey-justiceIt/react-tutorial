const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {
    type: Number,
    default: Date.now(),
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  company: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
    unique: false,
  },
  address: {
    type: String,
    default: "No configured address",
  },
  password: {
    type: String,
    required: false,
  },
  oldPassword: {
    type: String,
  },
  newPassword: {
    type: String,
  },
});

module.exports = mongoose.model("users", userSchema);
