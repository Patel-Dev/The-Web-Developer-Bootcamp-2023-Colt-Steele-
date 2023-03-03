const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
    .then(() => {
        console.log('MONGO CONNECTION OPEN!!!');
    })
    .catch(err => {
        console.log('OH NO! ERROR CONNECTING TO MONGO');
        console.log(err);
    })

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id: false,
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter',
        addresses: [
            {
                street: '123 Sesame St',
                city: 'New York',
                state: 'NY',
                country: 'USA'
            }
        ]
    })

    const res = await u.save();
    console.log(res);
}

//makeUser();

const addAddress = async (id) => {
    const u = await User.findById(id);
    console.log(u);
    u.addresses.push(
        {
            street: '99 3rd St',
            city: 'New York',
            state: 'NY',
            country: 'USA'
        }
    )
    const res = await u.save();
    console.log(res);
}

addAddress('64011b0c363c45a7d8f1c52e');