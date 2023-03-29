const express = require("express");
const connectDB = require("./db/config");
const mongoose = require("mongoose");

const PORT = 5001;

const app = express();

const connect = async () => {
  try {
    await connectDB();
    await User.deleteMany({});
    console.log("Deleted all users");
    await User.create(seeds);
    console.log("Created users");
    mongoose.connection.close();
    console.log("Closed connection");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (err) {
    console.log(err);
    mongoose.connection.close();
  }
};

connect();
