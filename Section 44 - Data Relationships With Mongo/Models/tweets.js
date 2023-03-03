const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/tweets')
    .then(() => {
        console.log('MONGO CONNECTION OPEN!!!');
    })
    .catch(err => {
        console.log('OH NO! ERROR CONNECTING TO MONGO');
        console.log(err);
    })

const userSchema = Schema({
    username: String,
    age: Number
})

const tweetSchema = Schema({
    text: String,
    likes: Number,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

const makeTweet = async () => {
    const user = new User({username: 'xEaglesEye--', age: 12});
    const firstTweet = new Tweet({text: 'This is my first tweet!', likes: 2});
    firstTweet.user = user;
    await user.save();
    await firstTweet.save();
}

const addTweet = async () => {
    const user = await User.findOne({username: 'xEaglesEye--'});
    const newTweet = new Tweet({text: 'I am a good gamer!', likes: 130343});
    newTweet.user = user;
    await newTweet.save();
}

//makeTweet();
//addTweet();

Tweet.findOne({})
    .populate('user', 'username')
    .then(user => console.log(user))