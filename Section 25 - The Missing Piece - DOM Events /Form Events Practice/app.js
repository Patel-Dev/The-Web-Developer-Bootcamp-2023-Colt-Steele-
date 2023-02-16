const button = document.querySelector('button')
const input = document.querySelector('input')
const list = document.querySelector('ul')

button.addEventListener('click', (evt) => {
    evt.preventDefault()

    const listItem = document.createElement('LI')
    listItem.innerText = input.value
    list.append(listItem)

    input.value = ""
})

