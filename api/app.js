const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const productsRoutes = require("./routes/products");
const userDate = require("./routes/userDate");
const keys = require("./config/keys");

mongoose
  .connect(keys.mongoURI)
  .then(() => console.log("MongoDB created"))
  .catch((e) => console.log(e));

app.use(require("morgan")("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require("cors")());

app.use("/api/auth", authRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/userDate", userDate);

module.exports = app;