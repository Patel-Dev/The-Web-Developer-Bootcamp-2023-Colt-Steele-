const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log('CONNECTION OPEN!!!');
    })
    .catch(err => {
        console.log('OH NO! ERROR CONNECTING');
        console.log(err);
    })

mongoose.set('strictQuery', true);

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'price must be nonnegative!']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: {
        type: [String],
        default: ['cycling']
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inPerson: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
})

productSchema.methods.greet = function () {
    console.log("HELLO!");
};

productSchema.methods.toggleOnSale = function() {
    this.onSale = !this.onSale;
    return this.save()
}

productSchema.methods.addCat = function(newCat) {
    this.categories.push(newCat);
    return this.save();
}
 
productSchema.statics.fireSale = function() {
    return this.updateMany({}, {price: 0, onSale: true});
}

const Product = mongoose.model('Product', productSchema);

const bike = new Product({name: 'Dirt Bike', price: 699.99, categories: ['cycling']})
bike.save()
    .then(() => {
        console.log('IT WORKED!');
    })
    .catch(err => {
        console.log('OH NO, ERROR!');
        console.log(err)
    })

const findProduct = async function() {
    const foundProduct = await Product.findOne({name: 'Tire Pump'});
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    await foundProduct.addCat('grip');
    console.log(foundProduct);
}

findProduct()
    .then(() => {
        Product.fireSale().then(res => console.log(res));
    })

// Product.findOneAndUpdate({name: 'Tire Pump'}, {price: 9.99}, {new: true, runValidators: true})
//     .then((data) => {
//         console.log('IT WORKED!');
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('OH NO, ERROR!');
//         console.log(err);
//     })