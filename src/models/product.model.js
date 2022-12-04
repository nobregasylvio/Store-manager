const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM passengers',
  );
  return (result);
};

const findById = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM passengers WHERE id = ?',
    [productId],
  );
  return result;
};

module.exports = {
  findAll,
  findById,
};
