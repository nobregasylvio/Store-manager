const { salesModel, productModel } = require('../models');

const findAll = async () => {
  const result = await salesModel.findAll();
  return { type: null, message: result };
};

const findById = async (saleId) => {
  const result = await salesModel.findById(saleId);
  if (result.length === 0) return { type: 404, message: 'Sale not found' };
  return { type: null, message: result };
};

const hasProduct = async (sales) => {
  const product = await Promise.all(
    sales.map(({ productId }) => productModel.findById(productId)),
  );

  if (product.some((id) => id === undefined)) return { type: 404, message: 'Product not found' };
};

const insert = async (sales) => {
  const resultProduct = await hasProduct(sales);
  if (resultProduct) return resultProduct;
  const id = await salesModel.insertSale();
  await salesModel.insert(id, sales);
  return { type: 201, message: { id, itemsSold: sales } };
};

module.exports = {
  findAll,
  findById,
  insert,
};
