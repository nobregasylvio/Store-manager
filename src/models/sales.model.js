const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM sales, sales_products ORDER BY sale_id, product_id asc',
  );
  return result;
};

const findById = async (saleId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM sales, sales_products WHERE sale_id = ?',
    [saleId],
  );
  return result;
};

module.exports = {
  findAll,
  findById,
};
