const express = require('express');

const router = express.Router();

const Product = require('../models/Product');

const productController = require('../controllers/product');

router.post('/', productController.createOneProduct);

router.get('/:id', productController.getOneProduct);

router.put('/:id', productController.updateOneProduct);

router.delete('/:id', productController.deleteOneProduct);

router.get('/', productController.getAllProducts);

module.exports = router;