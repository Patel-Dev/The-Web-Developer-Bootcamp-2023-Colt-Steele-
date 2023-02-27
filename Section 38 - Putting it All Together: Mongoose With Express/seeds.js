const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const Product = require('./models/product')

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log('MONGO CONNECTION OPEN!!!');
    })
    .catch(err => {
        console.log('OH NO! ERROR CONNECTING TO MONGO');
        console.log(err);
    })

Product.insertMany([
    {
        name: 'Organic Celery',
        price: 2.99,
        category: 'vegetables'
    },
    {
        name: 'Grapefruit',
        price: 1.99,
        category: 'fruits'
    },
    {
        name: 'Oranges',
        price: 1.49,
        category: 'fruits'
    },
    {
        name: 'Apples',
        price: 1.79,
        category: 'fruits'
    },
    {
        name: 'Brocolli',
        price: 1.29,
        category: 'vegetables'
    },
    {
        name: 'Milk',
        price: 2.49,
        category: 'dairy'
    },
    {
        name: 'Chocolate Milk',
        price: 3.49,
        category: 'dairy'
    }
])
    .then(() => {
        console.log('INSERTED PRODUCTS TO FARM STAND!');
    })
    .catch(err => {
        console.log('OH NO, ERROR INSERTING PRODUCTS TO STAND');
        console.log(err);
    })