const mongoose = require("mongoose");
const User = require("../db/models/User");

const getUsers = async (id) => {
  const users = await User.findById(id);
  return users;
};

module.exports = {
  getUsers,
};
