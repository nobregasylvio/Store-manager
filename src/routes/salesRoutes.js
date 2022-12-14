const express = require('express');
const { salesController } = require('../controllers');
const { salesValidation } = require('../middlewares/sales.middlewares');

const salesRoute = express.Router();

salesRoute.get('/', salesController.findAll);
salesRoute.get('/:id', salesController.findById);
salesRoute.post('/', salesValidation, salesController.insert);
salesRoute.delete('/:id', salesController.deleteSale);
salesRoute.put('/:id', salesValidation, salesController.update);

module.exports = salesRoute;
