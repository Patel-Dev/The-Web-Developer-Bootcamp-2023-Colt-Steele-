/*
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();

        setTimeout(() => {
            if (rand < 0.7) {
                resolve("YOUR FAKE DATA HERE!");
            }
            reject("Request Error!");
        }, 1000)
    })
}

fakeRequest('books.com/page1')
    .then((data) => {
        console.log("SUCCESS!")
        console.log(data)
    })
    .catch((err) => {
        console.log("ERR SOMEWHERE!")
        console.log(err)
    })
*/

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange("red", 1000)
    .then(() => (delayedColorChange("orange", 1000)))
    .then(() => (delayedColorChange("yellow", 1000)))
    .then(() => (delayedColorChange("green", 1000)))
    .then(() => (delayedColorChange("indigo", 1000)))
    .then(() => (delayedColorChange("violet", 1000)))