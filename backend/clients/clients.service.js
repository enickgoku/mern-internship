const mongoose = require("mongoose");
const Client = require("../db/models/Property");

const getClients = async () => {
  const clients = await Client.find({});
  return clients;
};

module.exports = {
  getClients,
};
