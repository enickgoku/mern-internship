const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  mlsNumber: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
  },
  price: {
    type: Number,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  taxes: {
    type: Number,
    required: true,
  },
  squareFootage: {
    type: Number,
    required: true,
  },
  homeType: {
    type: String,
    required: true,
  },
  parking: {
    garageType: {
      type: String,
      required: true,
    },
    garageSpaces: {
      type: Number,
      required: true,
    },
  },
  buildingAge: {
    type: Number,
    required: true,
  },
  basement: {
    type: {
      type: String,
      required: true,
    },
    squareFootage: {
      type: Number,
      required: true,
    },
  },
  photos: {
    type: [String],
    required: true,
  },
  client: {
    type: [String],
    ref: "Client",
  },
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
