const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id:{
    type: Number,
    default: Date.now()
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address:{
    type: String,
    default: "No configured address"
  },
  password: {
    type: String,
    required: true,
  },
  oldPassword: {
    type: String,

  },
  newPassword: {
    type: String,
  },
});

module.exports = mongoose.model("users", userSchema);
