const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const service = require("./properties.service");

const list = async (req, res) => {
  try {
    const data = await service.getProperties();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getProperty = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await service.getProperty(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  list: asyncErrorBoundary(list),
  getProperty: asyncErrorBoundary(getProperty),
};
