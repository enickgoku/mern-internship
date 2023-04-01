const mongoose = require("mongoose");
const User = require("../db/models/User");

const getUsers = async () => {
  const users = await User.find({});
  return users;
};

module.exports = {
  getUsers,
};
