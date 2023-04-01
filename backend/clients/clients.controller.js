const service = require("./clients.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const list = async (req, res) => {
  try {
    const data = await service.getClients();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  list: asyncErrorBoundary(list),
};
