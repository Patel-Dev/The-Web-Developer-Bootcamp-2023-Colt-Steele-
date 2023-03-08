const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruits', 'vegetables', 'dairy', 'baked goods']
    },
    farm: {
        type: Schema.Types.ObjectId,
        ref: 'Farm' 
    }
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;