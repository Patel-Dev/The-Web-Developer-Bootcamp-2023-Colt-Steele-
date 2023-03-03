const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/farmStand3')
    .then(() => {
        console.log('MONGO CONNECTION OPEN!!!');
    })
    .catch(err => {
        console.log('OH NO! ERROR CONNECTING TO MONGO');
        console.log(err);
    })

const productSchema = Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Winter', 'Spring', 'Summer', 'Fall']
    }
})

const farmSchema = Schema({
    name: String,
    city: String,
    products: [{type: Schema.Types.ObjectId, ref: 'Product'}]
})

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

// Product.deleteMany({});
// Farm.deleteMany({});

Product.insertMany([
    {name: 'Watermelon', price: 4.99, season: 'Summer'},
    {name: 'Tomato', price: 0.99, season: 'Spring'},
    {name: 'Celery', price: 1.99, season: 'Fall'}
])

const makeFarm = async () => {
    const ranch = new Farm({name: 'Big Belly Farm', city: 'Kansas City, MO'});
    await ranch.save();
    const watermelon = await Product.findOne({name: 'Watermelon'});
    const tomato = await Product.findOne({name: 'Tomato'});
    console.log(ranch);
    ranch.products.push(watermelon);
    await ranch.save();
    console.log(ranch);
    ranch.products.push(tomato);
    await ranch.save();
    console.log(ranch);
}

// const addProducts = async () => {
//     const ranch = await Farm.findOne({name: 'Big Belly Farm'});
//     const onion = new Product({name: 'Onion', price: 2.99, season: 'Winter'});
//     ranch.products.push(onion);
//     await ranch.save();
//     console.log(ranch);
// }

makeFarm()
    .then(() => {
        Farm.findOne({name: 'Big Belly Farm'})
            .populate('products')
            .then(farm => console.log(farm))
    })

// addProducts()
    // .then(() => {
    //     Farm.findOne({name: 'Big Belly Farm'})
    //         .populate('products')
    //         .then(farm => console.log(farm))
    // })