const mongoose = require("mongoose");
const Client = require("../db/models/Client");

const getClients = async () => {
  const clients = await Client.find({});
  return clients;
};

module.exports = {
  getClients,
};
