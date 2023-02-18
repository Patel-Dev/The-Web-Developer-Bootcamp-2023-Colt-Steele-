// setTimeout(() => {
//     document.body.style.backgroundColor = "red"
//     setTimeout(() => {
//         document.body.style.backgroundColor = "orange"
//         setTimeout(() => {
//             document.body.style.backgroundColor = "yellow"
//             setTimeout(() => {
//                 document.body.style.backgroundColor = "green"
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = "blue"
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

const updateColor = (delay, color, nextToDo) => {
    setTimeout(() => {
        document.body.style.backgroundColor = color;
        nextToDo && nextToDo();
    }, delay)
}

updateColor(1000, 'red', () => {
    updateColor(1000, 'orange', () => {
        updateColor(1000, 'yellow', () => {
            updateColor(1000, 'green', () => {
                updateColor(1000, 'blue')
            })
        })
    })
})