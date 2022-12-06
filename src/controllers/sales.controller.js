const { salesService } = require('../services');

const findAll = async (_req, res) => {
  const { message } = await salesService.findAll();
  return res.status(200).json(message);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.findById(id);
  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  findAll,
  findById,
};
