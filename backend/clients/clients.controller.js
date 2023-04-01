const service = require("./clients.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const list = async (req, res) => {
  const data = await service.getClients();
  res.json(data);
};

module.exports = {
  list: asyncErrorBoundary(list),
};
