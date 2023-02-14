const button = document.querySelector('button');
const input = document.querySelector('input');

button.addEventListener('click', function (evt) {
    console.log(evt);
    console.log(evt.key);
    console.log(evt.code);
})

// input.addEventListener('keydown', function (evt) {
//     console.log(evt.key);
//     console.log(evt.code);
// })

// input.addEventListener('keyup', function (evt) {
//     console.log(evt.key);
//     console.log(evt.code);
// })

input.addEventListener('keydown', function (evt) {
    switch (evt.code) {
        case "ArrowDown":
            console.log("DOWN")
            break;
        case "ArrowUp":
            console.log("UP")
            break;
        case "ArrowLeft":
            console.log("LEFT")
            break;
        case "ArrowRight":
            console.log("RIGHT")
            break;
    }
})