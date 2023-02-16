const heading1 = document.querySelector("#heading1")
const heading2 = document.querySelector("#heading2")

const input = document.querySelector("#input")
const change = document.querySelector("#change")

input.addEventListener('input', () => {
    console.log("INPUT EVENT")
    heading1.innerText = input.value
})

change.addEventListener('change', () => {
    console.log("CHANGE EVENT")
    heading2.innerText = change.value
})