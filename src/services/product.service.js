const { productModel } = require('../models');

const findAll = async () => {
  const result = await productModel.findAll();
  return { type: null, message: result };
};

const findById = async (productId) => {
  const result = await productModel.findById(productId);
  if (!result) return { type: 404, message: 'Product not found' };
  return { type: null, message: result };
};

const insert = async (name) => {
  const id = await productModel.insert(name);
  const result = await productModel.findById(id);

  return { type: 201, message: result };
};

module.exports = {
  findAll,
  findById,
  insert,
};
