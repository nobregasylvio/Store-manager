const express = require('express');
const { productController } = require('../controllers');
const { nameValidation } = require('../middlewares/product.middlewares');

const productRoute = express.Router();

productRoute.get('/search', productController.search);
productRoute.get('/', productController.findAll);
productRoute.get('/:id', productController.findById);

productRoute.post('/', nameValidation, productController.insert);

productRoute.put('/:id', nameValidation, productController.update);

productRoute.delete('/:id', productController.deleteProduct);

module.exports = productRoute;