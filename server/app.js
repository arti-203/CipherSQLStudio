const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sqlRoutes = require("./routes/sqlRoutes");
const hintRoutes = require("./routes/hintRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", sqlRoutes);
app.use("/api", hintRoutes);

app.get("/", (req, res) => {
  res.send("CipherSQLStudio API is running");
});

module.exports = app;