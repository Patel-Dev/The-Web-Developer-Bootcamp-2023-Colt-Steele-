const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('tiny'));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});

app.use('/dogs', (req, res, next) => {
    console.log('I LOVE DOGS!');
    next();
});

const verifyPassword = (req, res, next) => {
    const {password} = req.query;
    if (password === 'dev') {
        next();
    } else {
        res.send("SORRY YOU NEED A PASSWORD!");
    }
};

// app.use((req, res, next) => {
//     console.log('THIS IS MY FIRST MIDDLEWARE!');
//     return next();
//     console.log('THIS IS MY FIRST MIDDLEWARE!');
// });
// app.use((req, res, next) => {
//     console.log('THIS IS MY SECOND MIDDLEWARE!');
//     return next();
// });
// app.use((req, res, next) => {
//     console.log('THIS IS MY THIRD MIDDLEWARE!');
//     return next();
// });

app.get('/', (req, res) => {
    res.send('HOME PAGE');
});

app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF');
});

app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS: Haha I dont have one!')
});

app.use((req, res) => {
    res.status(404).send('NOT FOUND');
});

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000');
});