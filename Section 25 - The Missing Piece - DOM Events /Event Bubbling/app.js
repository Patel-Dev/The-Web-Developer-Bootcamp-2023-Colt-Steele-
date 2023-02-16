const paragraph1 = document.querySelector("#paragraph1")
const paragraph2 = document.querySelector("#paragraph2")
const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")

paragraph1.addEventListener('click', () => {
    alert("CLICKED PARAGRAPH 1!")
})

paragraph2.addEventListener('click', () => {
    alert("CLICKED PARAGRAPH 2!")
})

button1.addEventListener('click', () => {
    alert("CLICKED BUTTON 1!")
})

button2.addEventListener('click', (e) => {
    alert("CLICKED BUTTON 2!")
    e.stopPropagation()
})