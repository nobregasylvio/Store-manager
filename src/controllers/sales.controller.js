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

const insert = async (req, res) => {
  const sales = req.body;
  const { type, message } = await salesService.insert(sales);
  return res.status(type).json(message);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.deleteSale(id);
  if (type) return res.status(type).json({ message });
  return res.status(204).send();
};

const update = async (req, res) => {
  const { id } = req.params;
  const sales = req.body;
  const { type, message } = await salesService.update(id, sales);
  return res.status(type).json(message);
};

module.exports = {
  findAll,
  findById,
  insert,
  deleteSale,
  update,
};
