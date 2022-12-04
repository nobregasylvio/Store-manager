const { productModel } = require('../models');

const findAll = async () => {
  const result = await productModel.findAll();
  return { type: null, message: result };
};

const findById = async (productId) => {
  const result = await productModel.findById(productId);
  if (!result) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: result };
};

module.exports = {
  findAll,
  findById,
};
