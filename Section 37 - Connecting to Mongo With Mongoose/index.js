const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log('CONNECTION OPEN!!!');
    })
    .catch(err => {
        console.log('OH NO! ERROR CONNECTING');
        console.log(err);
    })

mongoose.set('strictQuery', true);

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = new mongoose.model('Movie', movieSchema);
// const amadeus = new Movie({title: 'Amadeus', year: 1986, score: 9.2, rating: 'R'})

/*
Movie.insertMany([
    {title: 'Terminator', year: 1984, score: 8.0, rating: 'R'},
    {title: 'Terminator 2', year: 1991, score: 8.4, rating: 'R'},
    {title: 'The Nightmare on Elm Street', year: 1981, score: 7.4, rating: 'R'},
    {title: 'Despicable Me', year: 2010, score: 7.8, rating: 'PG13'},
    {title: 'Ice Age', year: 2006, score: 8.2, rating: 'PG13'},
])
    .then((data) => {
        console.log('IT WORKED!');
        console.log(data);
    })
*/

