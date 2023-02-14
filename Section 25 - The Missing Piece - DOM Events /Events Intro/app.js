const v2 = document.querySelector("#v2");
v2.onclick = function () {
    console.log("YOU CLICKED ME!")
}

const hover = document.querySelector("#hover");
hover.onmouseenter = function () {
    console.log("YOU'RE HOVERING OVER ME!");
}

const heading = document.querySelector('h1');
heading.onclick = () => {
    alert('you clicked moi!');
}

const v3 = document.querySelector("#v3")
const printScream = function () {
    console.log("scream")
}
const printShout = () => {
    console.log("shout")
}

// v3.onclick = printScream;
// v3.onclick = printShout; // overrides onclick behaviour to shout

v3.addEventListener('click', printScream)
v3.addEventListener('click', printShout, { once: true }) // adds shout to click event so both scream and shout happen when button is pressed. can set to only happen once