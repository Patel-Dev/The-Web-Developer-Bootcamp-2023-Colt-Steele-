const express = require('express');
const morgan = require('morgan');
const AppError = require('./AppError');
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
    } // else {
       // res.send("SORRY YOU NEED A PASSWORD!");
    //}
    //throw Error('Password Required!');
    throw new AppError('Password Required!', 401);
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

app.get('/error', (req, res) => {
    chicken.fly();
})

app.get('/admin', (req, res) => {
    throw new AppError('You are not an admin!', 403);
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS: Haha I dont have one!')
});

app.use((req, res) => {
    res.status(404).send('NOT FOUND');
});

// app.use((err, req, res, next) => {
//     console.log("******ERROR********");
//     //console.log(err);
//     next(err);
// })

app.use((err, req, res, next) => {
    const {status = 500, message = 'Something went wrong'} = err;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000');
});