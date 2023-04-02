const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("./users.service");

const list = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const data = await service.getUsers(userId);

    data.photo = `http://localhost:5001/db/seeders/assets/${data.photo}`;

    res.status(200).send(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  list: asyncErrorBoundary(list),
};
