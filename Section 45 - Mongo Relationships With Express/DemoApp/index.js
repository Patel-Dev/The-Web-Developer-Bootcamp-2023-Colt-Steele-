const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product');
const Farm = require('./models/farm');
const AppError = require('./AppError');
const methodOverride = require('method-override');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'));

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/farmStandTake2')
    .then(() => {
        console.log('MONGO CONNECTION OPEN!!!');
    })
    .catch(err => {
        console.log('OH NO! ERROR CONNECTING TO MONGO');
        console.log(err);
    })

const categories = ['fruits', 'vegetables', 'dairy', 'baked goods']

const wrapAsync = (fn) => {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e));
    }
}

// FARM ROUTES

app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', {farms});
})

app.get('/farms/new', (req, res) => {
    res.render('farms/new');
})

app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id).populate('products');
    console.log(farm);
    res.render('farms/show', {farm});
})

app.post('/farms', async (req, res) => {
    const farm = new Farm(req.body);
    await farm.save();
    res.redirect('/farms');
})

app.delete('/farms/:id', async (req, res) => {
    await Farm.findByIdAndDelete(req.params.id)
    res.redirect('/farms')
})


// PRODUCT ROUTES

app.get('/products', wrapAsync(async (req, res, next) => {
    const {category} = req.query;
    if (category) {
        const products = await Product.find({category});
        res.render('products/index', {products, category});
    } else {
        const products = await Product.find({});
        res.render('products/index', {products, category: 'All'});
    }
}));

app.get('/products/new', (req, res) => {
    res.render('products/new', {categories});
})

app.get('/products/:id', wrapAsync(async (req, res, next) => {
    const {id} = req.params;
    const product = await Product.findById(id).populate('farm');
    if (!product) {
        throw new AppError('Product does not exist!', 404);
    }
    res.render('products/show', {product});
}));

app.post('/products', wrapAsync(async (req, res) => {
    console.log(req.body);
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`products/${newProduct._id}`);
}))

app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    if (!product) {
        throw new AppError('Product does not exist!', 404);
    }
    res.render('products/edit', {product, categories});
}))

app.put('/products/:id', wrapAsync(async(req, res) => {
    const {id} = req.params;
    const newProduct = await Product.findByIdAndUpdate(id, req.body, {runValidators: true});
    res.redirect(`/products/${newProduct._id}`);
}))

app.delete('/products/:id', wrapAsync(async(req, res) => {
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products')
}))

app.get('/farms/:id/products/new', async (req, res) => {
    const {id} = req.params;
    const farm = await Farm.findById(id);
    res.render('products/new', {categories, farm})
})

app.post('/farms/:id/products', async (req, res) => {
    const {id} = req.params;
    const farm = await Farm.findById(id);
    const {name, price, category} = req.body;
    const product = new Product({name, price, category});
    farm.products.push(product);
    product.farm = farm;
    await farm.save();
    await product.save();
    res.redirect(`/farms/${id}`);
})

const handleValidationErr = (err) => {
    console.dir(err);
    return new AppError(`Validation Error...${err.message}`, 404);
}

app.use((err, req, res, next) => {
    console.dir(err.name);
    if (err.name === 'ValidationError') err = handleValidationErr(err); 
    next(err);
})

app.use((err, req, res, next) => {
    const {status = 500, message = 'Something went wrong!'} = err;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log('APP IS LISTENING ON PORT 3000!');
});