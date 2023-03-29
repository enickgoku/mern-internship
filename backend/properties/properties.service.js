const mongoose = require("mongoose");
const Property = require("../db/modals/Property");

const getProperties = async () => {
  const properties = await Property.find({});
  return properties;
};

module.exports = {
  getProperties,
};
