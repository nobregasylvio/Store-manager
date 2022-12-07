const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    `SELECT * FROM sales 
    INNER JOIN sales_products 
    ON sales.id = sales_products.sale_id
    ORDER BY sale_id, product_id asc`,
  );
  return camelize(result);
};

const findById = async (saleId) => {
  const [result] = await connection.execute(
    `SELECT date, product_id, quantity FROM sales 
    INNER JOIN sales_products 
    ON sales.id = sales_products.sale_id
    WHERE sale_id = ?
    ORDER BY sale_id, product_id asc`,
    [saleId],
  );
  return camelize(result);
};

module.exports = {
  findAll,
  findById,
};
