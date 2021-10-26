const express = require("express");
const authRoutes = require("./routes/auth");
const productsRoutes = require("./routes/products");
const salesRoutes = require("./routes/sales");
const analyticsRoutes = require("./routes/analytics");
const app = express();

app.use("/api/auth", authRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/sales", salesRoutes);
app.use("/api/analytics", analyticsRoutes);

module.exports = app;
