const express = require('express');

const router = express.Router();

const auth = require('../middlewares/auth');

const { createOneProduct, getOneProduct, updateOneProduct, deleteOneProduct, getAllProducts } = require('../controllers/product');

router.post('/', auth, createOneProduct);

router.get('/:id', auth, getOneProduct);

router.put('/:id', auth, updateOneProduct);

router.delete('/:id', auth, deleteOneProduct);

router.get('/', auth, getAllProducts);

module.exports = router;