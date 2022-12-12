const joi = require('joi');

const salesSchema = joi.object({
  productId: joi.number().integer().required(),
  quantity: joi.number().integer().min(1).required(),
});

// REQ 06 - Mentoria do MD - 12/12/22
const salesValidation = (req, res, next) => {
  const sales = req.body;
  let message = null;
  sales.forEach(({ productId, quantity }) => {
    const { error } = salesSchema.validate({ productId, quantity });
    if (error !== undefined) message = error.details[0].message;
  });
  console.log(message);
  if (message === '"quantity" must be greater than or equal to 1') {
    return res.status(422).json({ message });
  }
  if (message !== null) return res.status(400).json({ message });
  next();
};

module.exports = {
  salesValidation,
};