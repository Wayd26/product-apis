const Product = require('../models/Product')

exports.createOneProduct = (req, res, next) => {
    const product = new Product({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        userId: req.body.userId,
        price: req.body.price
    });

    product.save().then(
        () => {
            res.status(201).send(`The product ${req.body?.title} has been saved successfully`)
        }
    ).catch(
        (error) => res.status(400).json({error: error})
    )
}

exports.getOneProduct = (req, res, next) => {
    Product.findOne({_id: req.params.id}).then(
        (product) => {
            res.status(200).json(product)
        }
    ).catch(
        (error) => res.status(400).json({error: error})
    )
}

exports.updateOneProduct = (req, res, next) => {
        const product = new Product({
            _id: req.params.id,
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            userId: req.body.userId,
            price: req.body.price
        })
    Product.updateOne({_id: req.params.id}, product).then(
        (product) => {
            res.status(201).json({message: 'Update done with success'})
        }
    ).catch(
        (error) => res.status(400).json({error: error})
    )
}

exports.deleteOneProduct = (req, res, next) => {
    Product.findOneAndDelete({_id: req.params.id}).then(
        (product) => {
            res.status(200).send(`Product ${product?.title} has been deleted successfully`)
        }
    ).catch(
        (error) => {
            res.status(400).json({error: error})
        }
    )
}

exports.getAllProducts = (req, res, next) => {
    Product.find().then(
    (products) => {
        res.status(200).json(products)
    }
    ).catch(
        (error) => {
            res.status(400).json({error: error})
        }
    )
}