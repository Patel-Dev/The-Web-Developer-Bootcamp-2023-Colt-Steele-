const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruits', 'vegetables', 'dairy', 'baked goods']
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;