const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const express = require("express");
const cors = require("cors");

const notFound = require("./notFounderrors/notFound");
const errorHandler = require("./errors/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

//define a home route that collects all data from the database

app.use("/", (req, res) => {
  res.send("Hello World");
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;
