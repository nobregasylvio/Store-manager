const express = require('express');
const { salesController } = require('../controllers');

const salesRoute = express.Router();

salesRoute.get('/', salesController.findAll);
salesRoute.get('/:id', salesController.findById);

module.exports = salesRoute;
