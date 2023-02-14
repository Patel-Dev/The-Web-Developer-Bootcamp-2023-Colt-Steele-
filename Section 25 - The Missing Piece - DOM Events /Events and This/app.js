const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return `rgb(${r}, ${g}, ${b})`;
}

let buttons = document.querySelectorAll("button")

function changeColors() {
    this.style.backgroundColor = makeRandColor()
    this.style.color = makeRandColor()
}

for (let button of buttons) {
    button.addEventListener('click', changeColors)
}

let headings = document.querySelectorAll("h1");

for (let heading of headings) {
    heading.addEventListener('click', changeColors)
}