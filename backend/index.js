require("dotenv").config();
const app = require("./app");
const connectDB = require("./db/config");
const mongoose = require("mongoose");
const Property = require("./db/modals/Property");
const User = require("./db/modals/User");
const Client = require("./db/modals/Client");
const { users, clients, properties } = require("./db/seeders/Seeds");

console.log(users);

const { PORT = 5001 } = process.env;

const connect = async () => {
  try {
    await connectDB();
    await Property.deleteMany({});
    await User.deleteMany({});
    await Client.deleteMany({});
    await User.insertMany(users);
    await Client.insertMany(clients);
    await Property.insertMany(properties);
    console.log("DB Seeded");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (err) {
    console.log(err);
    mongoose.connection.close();
  }
};

connect();
