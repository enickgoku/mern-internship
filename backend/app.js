const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const express = require("express");
const cors = require("cors");
const propertyRouter = require("./properties/properties.router");
const userRouter = require("./users/users.router");
const clientRouter = require("./clients/clients.router");

const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/clients", clientRouter);
app.use("/user", userRouter);
app.use("/properties", propertyRouter);
app.use("properties/:id", propertyRouter);
app.use("/db/seeders/assets", express.static("db/seeders/assets"));

app.use(notFound);
app.use(errorHandler);

module.exports = app;
