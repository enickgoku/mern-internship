const properties = [
  {
    mlsNumber: "123456",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
    bedrooms: 3,
    bathrooms: 2,
    taxes: 5000,
    squareFootage: 2000,
    homeType: "Single Family",
    parking: {
      garageType: "Attached",
      garageSpaces: 2,
    },
    buildingAge: 10,
    basement: {
      type: "Finished",
      squareFootage: 1000,
    },
    photos: [
      "./assets/house.jpeg",
      "./assets/house-2.jpeg",
      "./assets/house-3.jpeg",
    ],
  },
  {
    mlsNumber: "234567",
    address: {
      street: "456 Elm St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
    bedrooms: 4,
    bathrooms: 3,
    taxes: 6000,
    squareFootage: 2500,
    homeType: "Single Family",
    parking: {
      garageType: "Detached",
      garageSpaces: 1,
    },
    buildingAge: 5,
    basement: {
      type: "Unfinished",
      squareFootage: 0,
    },
    photos: [
      "./assets/house-7.jpeg",
      "./assets/house-8.jpeg",
      "./assets/house-9.jpeg",
    ],
  },
  {
    mlsNumber: "345678",
    address: {
      street: "789 Oak St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
    bedrooms: 2,
    bathrooms: 1,
    taxes: 4000,
    squareFootage: 1500,
    homeType: "Condo",
    parking: {
      garageType: "None",
      garageSpaces: 0,
    },
    buildingAge: 20,
    basement: {
      type: "None",
      squareFootage: 0,
    },
    photos: [
      "./assets/house-4.jpeg",
      "./assets/house-5.jpeg",
      "./assets/house-6.jpeg",
    ],
  },
];

module.exports = properties;
