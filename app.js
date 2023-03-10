const express = require("express");

const morgan = require("morgan")

const app = express();

const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Wass:0000@cluster0.uzmuaou.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connexion to MongoDB Succeeded'))
    .catch((error) => console.log('Connexion to MongoDB Failed | Reason : ', error));

app.use(express.json())

app.use(morgan("dev"));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});



app.use('/api/product', productRoutes);

app.use('/api/user', userRoutes);

module.exports = app;


