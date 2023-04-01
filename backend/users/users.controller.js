const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("./users.service");

const list = async (req, res, next) => {
  const data = await service.getUsers();
  res.json(data);
};

module.exports = {
  list: asyncErrorBoundary(list),
};
