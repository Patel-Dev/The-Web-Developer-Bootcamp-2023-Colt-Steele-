const express = require('express');
const app = express();
const path = require('path');
const allData = require('./data.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get('/cats', (req, res) => {
    const cats = ['Waffle', 'Cookie', 'Midnight', 'Purr', 'Meow']
    res.render('cats.ejs', { cats: cats });
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random.ejs', { num: num });
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = allData[subreddit]

    if (data) {
        res.render('subreddit.ejs', { ...data })
    } else {
        res.render('notfound.ejs', { subreddit: subreddit })
    }
})

app.listen(8080, () => {
    console.log('LISTENING TO PORT 8080');
})