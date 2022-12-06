const joi = require('joi');

const nameSchema = joi.object({
  name: joi.string().min(5).required(),
});

const nameValidation = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  const { error } = nameSchema.validate({ name });
  if (error) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
};

module.exports = {
  nameValidation,
};
