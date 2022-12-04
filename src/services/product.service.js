const productModel = require('../models');

const findAll = () => {
  const result = productModel.findAll();
  return result;
};

const findById = (productId) => {
  const result = productModel.findById(productId);
  return result;
};

module.exports = {
  findAll,
  findById,
};
