const express = require('express');
const { productController } = require('../controllers');

const productRoute = express.Router();

productRoute.get('/', productController.findAll);
productRoute.get('/:id', productController.findById);
productRoute.post('/', productController.insert);

module.exports = productRoute;