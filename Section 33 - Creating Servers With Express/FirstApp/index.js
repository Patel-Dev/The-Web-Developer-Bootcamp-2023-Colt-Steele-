const express = require('express')
const app = express()

/*
app.use((req, res) => {
    console.log('WE GOT A NEW REQUEST!')
    res.send({ colors: "red" })
})*/

app.get('/', (req, res) => {
    res.send('HOME PAGE!!!')
})

app.get('/cats', (req, res) => {
    res.send('MEOW')
})

app.post('/cats', (req, res) => {
    res.send('THIS IS A RESPONSE TO A POST REQUEST FOR /CATS')
})

app.get('/dogs', (req, res) => {
    res.send('BARK')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Looking at the ${subreddit} subreddit!</h1>`)
})

app.get('/r/:subreddit/:postID', (req, res) => {
    const { subreddit, postID } = req.params;
    res.send(`<h1>Looking at post with ID ${postID} on the ${subreddit} subreddit!</h1>`)
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED')
    }
    res.send(`<h1>Looking for something related to ${q}</h1>`)
})

app.get('*', (req, res) => {
    res.send(`I DON'T KNOW THIS PAGE!`)
})

app.listen(8080, () => {
    console.log('LISTENING ON PORT 8080!')
})