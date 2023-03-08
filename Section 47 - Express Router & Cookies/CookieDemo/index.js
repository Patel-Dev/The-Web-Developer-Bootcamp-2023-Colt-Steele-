const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser('thisismysecret'));

app.get('/greet', (req, res) => {
    const {name = 'borz'} = req.cookies;
    res.send(`HEY THERE, ${name}!`);
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'dev');
    res.cookie('animal', 'goat');
    res.send('OK I MADE SOME COOKIES!');
})

app.get('/signmycookie', (req, res) => {
    res.cookie('fruit', 'apple', { signed: true });
    res.send('OK, SIGNED YOUR COOKIE!')
})

app.get('/getsignedcookie', (req, res) => {
    console.log(req.cookies)
    res.send(req.signedCookies);
})

app.listen(3000, () => {
    console.log('SERVING!');
})