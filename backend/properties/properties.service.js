const mongoose = require("mongoose");
const Property = require("../db/models/Property");

const getProperties = async () => {
  const properties = await Property.find({});
  return properties;
};

const getProperty = async (id) => {
  const property = await Property.findById(id);
  return property;
};

module.exports = {
  getProperties,
  getProperty,
};
