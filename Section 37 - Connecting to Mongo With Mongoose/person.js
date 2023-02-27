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

personSchema = new mongoose.Schema({
    first: String,
    last: String
});

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`;
})

personSchema.pre('save', function () {
    this.first = 'Dev';
    this.last = 'Patel';
    console.log("ABOUT TO SAVE!");
})

personSchema.post('save', function() {
    console.log("JUST SAVED!")
})

const Person = mongoose.model('Person', personSchema);