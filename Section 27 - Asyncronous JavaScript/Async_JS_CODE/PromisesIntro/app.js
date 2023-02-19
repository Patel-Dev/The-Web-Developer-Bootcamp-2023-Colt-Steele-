// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

/*
fakeRequestCallback("books.com",
    (response) => {
        console.log("IT WORKED!")
        console.log(response)

        fakeRequestCallback("books.com/page2",
            (response) => {
                console.log("IT WORKED AGAIN!")
                console.log(response)

                fakeRequestCallback("books.com/page3",
                    (response) => {
                        console.log("IT WORKED A THIRD TIME!")
                        console.log(response)
                    },
                    (err) => {
                        console.log("ERROR (3rd page) ", err)
                    })
            },
            (err) => {
                console.log("ERROR (2nd page) ", err)
            })
    },
    (err) => {
        console.log("ERROR ", err)
    })
*/

/*
fakeRequestPromise("books.com/page1")
    .then(() => {
        console.log("WORKED! (page1)")
        fakeRequestPromise("books.com/page2")
            .then(() => {
                console.log("WORKED! (page2)")
                fakeRequestPromise("books.com/page3")
                    .then(() => {
                        console.log("WORKED! (page3)")

                    })
                    .catch(() => {
                        console.log("ERR (page 3)")
                    })
            })
            .catch(() => {
                console.log("ERR (page 2)")
            })
    })
    .catch(() => {
        console.log("ERR (page 1)")
    })
*/

fakeRequestPromise("books.com/page1")
    .then((data) => {
        console.log("SUCCESS! (page 1)")
        console.log(data)
        return fakeRequestPromise("books.com/page2")
    })
    .then((data) => {
        console.log("SUCCESS! (page 2)")
        console.log(data)
        return fakeRequestPromise("books.com/page3")
    })
    .then((data) => {
        console.log("SUCCESS! (page 3)")
        console.log(data)
    })
    .catch((err) => {
        console.log("ERROR SOMEWHERE")
        console.log(err)
    })


