const { salesModel } = require('../models');

const findAll = async () => {
  const result = await salesModel.findAll();
  return { type: null, message: result };
};

const findById = async (saleId) => {
  const result = await salesModel.findById(saleId);
  if (result.length === 0) return { type: 404, message: 'Sale not found' };
  return { type: null, message: result };
};

module.exports = {
  findAll,
  findById,
};
