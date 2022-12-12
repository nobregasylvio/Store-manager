const joi = require('joi');

const salesSchema = joi.object({
  productId: joi.number().integer().required(),
  quantity: joi.number().integer().min(1).required(),
});

module.exports = { salesSchema };
