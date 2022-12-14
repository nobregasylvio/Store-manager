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

  if (product.some((id) => id === undefined)) return { message: 'Product not found' };
};

const insert = async (sales) => {
  const resultProduct = await hasProduct(sales);
  if (resultProduct) return { type: 404, message: resultProduct };
  const id = await salesModel.insertSale();
  await salesModel.insert(id, sales);
  return { type: 201, message: { id, itemsSold: sales } };
};

const update = async (id, sales) => {
  const resultProduct = await hasProduct(sales);
  if (resultProduct) return { type: 404, message: resultProduct };

  const result = await salesModel.findById(id);
  if (result.length === 0) return { type: 404, message: { message: 'Sale not found' } };

  await salesModel.update(id, sales);
  return { type: 200, message: { saleId: id, itemsUpdated: sales } };
};

const deleteSale = async (id) => {
  const result = await salesModel.findById(id);
  if (result.length === 0) return { type: 404, message: 'Sale not found' };

  await salesModel.deleteSale(id);
  return { type: null, message: '' };
};

module.exports = {
  findAll,
  findById,
  insert,
  deleteSale,
  update,
};
