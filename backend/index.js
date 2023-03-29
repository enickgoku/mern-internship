require("dotenv").config();
const express = require("express");
const connectDB = require("./db/config");
const mongoose = require("mongoose");
const Property = require("./db/modals/Property");
const seeds = require("./db/seeders/Properties");

console.log(seeds);

const { PORT = 5001 } = process.env;

const app = express();

const connect = async () => {
  try {
    await connectDB();
    await Property.deleteMany({});
    console.log("Deleted all properties");
    await Property.insertMany(seeds);
    console.log("Created properties");
    mongoose.connection.close();
    console.log("Closed connection");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (err) {
    console.log(err);
    mongoose.connection.close();
  }
};

connect();
