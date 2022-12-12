const joi = require('joi');

const salesSchema = joi.object({
  productId: joi.number().integer().required(),
  quantity: joi.number().integer().min(1).required(),
});

const salesValidation = (req, res, next) => {
  const sales = req.body;
  sales.forEach(({ productId, quantity }) => {
    const { error } = salesSchema.validate({ productId, quantity });
    
    if (error) return res.status(400).json({ message: error.message });
  });
  next();
};

module.exports = {
  salesValidation,
};