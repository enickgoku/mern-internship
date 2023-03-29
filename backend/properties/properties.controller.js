const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const service = require("./properties.service");

const list = async (req, res) => {
  const data = await service.getProperties();
  res.json(data);
};

module.exports = {
  list: asyncErrorBoundary(list),
};
