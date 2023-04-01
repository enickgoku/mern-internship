const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const express = require("express");
const cors = require("cors");
const propertyRouter = require("./properties/properties.router");

const bodyParser = require("body-parser");

const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

//define a home route that collects all data from the database

app.use("/", propertyRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
