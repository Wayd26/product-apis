const express = require('express');

const router = express.Router();

const Product = require('../models/Product');
const product = require('../models/Product');

router.post('/', (req, res, next) => {
    const product = new Product({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        userId: req.body.userId,
        price: req.body.price
    })
    product.save().then(
        () => {
            res.status(201).json({
                message: `Product ${req.body.title} saved successfully`
            })
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            })
        }
    )
})


router.get('/:id', (req, res, next) => {
    Product.findOne({_id: req.params.id}).then(
        product => res.status(200).json(product)
    ).catch(
        (error) => {
            res.status(400).json({error: error})
        }
    )
})

router.put('/:id', (req, res, next) => {
    const product = new Product({
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        userId: req.body.userId,
        price: req.body.price
    })
    Product.updateOne({_id: req.params.id}, product).then(
        
           () => res.status(201).json({
                message: 'Update done successfully!'
            })
        
    ).catch(
        (error) => res.status(400).json({error: error})
    )
})

router.delete('/:id', (req, res, next) => {
    Product.findOneAndDelete({_id: req.params.id}).then(
        (product) => res.status(200).send(`Product ${product?.title} has been successfully deleted`)
    ).catch(
        (error) => res.status(400).json({error: error})
    )
})

router.get('/', (req, res, next) => {
    Product.find().then(
        products => res.status(200).json(products)
    ).catch(
        error => res.status(400).json({error: error})
    )
})
module.exports = router;