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

const insertSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO sales () VALUE ()',
  );

  return insertId;
};

const insert = async (id, sales) => {
  await Promise.all(sales.map(async (sale) => {
    await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id,product_id, quantity) VALUES (?, ?, ?)',
      [id, sale.productId, sale.quantity],
    );
  }));

  return id;
};

const deleteSale = async (id) => {
  await connection.execute(
    'DELETE FROM sales WHERE id = ?',
    [id],
  );
};

module.exports = {
  findAll,
  findById,
  insertSale,
  insert,
  deleteSale,
};
