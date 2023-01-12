const express = require("express");

const app = express();

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Wass:0000@cluster0.uzmuaou.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,})
    .then(() => console.log('Connexion to MongoDB Succeeded'))
    .catch((error) => console.log('Connexion to MongoDB Failed | Reason : ', error));
    // .catch(() => console.log('Connexion to MongoDB Failed'));


app.use(express.json())

const Product = require('./models/Product');

const productRoutes = require('./routes/product');




 app.use((req, res, next) => {
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
     next();
   });



app.use('/api/product', productRoutes);




module.exports = app;


