const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("./users.service");

const list = (req, res, next) => {
  const data = service.getUsers();
  res.json(data);
};

module.exports = {
  list: asyncErrorBoundary(list),
};
