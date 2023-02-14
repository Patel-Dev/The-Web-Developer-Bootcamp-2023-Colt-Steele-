const heading = document.querySelector('h1')
const button = document.querySelector('button');
const body = document.querySelector('body');

const changeColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    const newColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = newColor;
    heading.innerText = newColor;

    if (r + g + b <= 100) {
        heading.style.color = `white`;
    } else {
        heading.style.color = 'black';
    }
}

/*
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return `rgb(${r}, ${g}, ${b})`;
}
*/

button.addEventListener('click', changeColor)