require("dotenv/config");
const moongoose = require("mongoose");

const connectDB = async () => {
  try {
    await moongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB, WOOO!!!");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
