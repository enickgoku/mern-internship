const clients = [
  {
    _id: "63701cc1f03239c72c000199",
    name: "Client 1",
    email: "client1@example.com",
    phone: "123-456-7890",
    address: "123 Main St",
    city: "New York",
    state: "NY",
    country: "USA",
    notes: "Lorem ipsum dolor sit amet",
    createdBy: [],
  },
  {
    _id: "63701cc1f03239c72c00019a",
    name: "Client 2",
    email: "client2@example.com",
    phone: "123-456-7890",
    address: "456 Elm St",
    city: "Los Angeles",
    state: "CA",
    country: "USA",
    notes: "Lorem ipsum dolor sit amet",
    createdBy: [],
  },
];

const users = [
  {
    _id: "63701cc1f03239c72c00018a",
    name: "Nick Engelhardt",
    email: "someemail@someplace.com",
    password: "vDE7joT",
    city: "Hrušica",
    state: null,
    country: "SI",
    occupation: "Administrative Assistant III",
    phoneNumber: "2401478620",
    role: "user",
    clients: [clients[0]._id, clients[1]._id],
    photo: "user.png",
  },
];

clients[0].createdBy.push(users[0]._id);
clients[1].createdBy.push(users[0]._id);

const properties = [
  {
    _id: "63701cc1f03239c72c0001a1",
    mlsNumber: "123456",
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
    photos: ["house-4.jpeg", "house-5.jpeg", "house-6.jpeg"],
    client: [clients[0]._id],
  },
  {
    _id: "63701cc1f03239c72c0001a2",
    mlsNumber: "333333",
    address: {
      street: "111 New St",
      city: "Howell",
      state: "MI",
      zip: "12222",
    },
    bedrooms: 3,
    bathrooms: 2,
    taxes: 4000,
    squareFootage: 1900,
    homeType: "Condo",
    parking: {
      garageType: "attached",
      garageSpaces: 2,
    },
    buildingAge: 10,
    basement: {
      type: "finished",
      squareFootage: 500,
    },
    photos: ["house-7.jpeg", "house-8.jpeg", "house-9.jpeg"],
    client: [clients[0]._id],
  },
];

module.exports = {
  users,
  clients,
  properties,
};
