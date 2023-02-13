const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.innerText = 'I AM A LINK!!!!'
}


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

//innerHTML
let desc = document.querySelector('p').innerHTML;
console.log(desc)
document.querySelector('p').innerHTML = "<h2>This is some random text</h2>"

//textContent
let allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs)
console.log(allParagraphs[1].textContent);

//classList && value
let square = document.querySelector('.square');
console.log(square.classList.value);
square.classList.remove("square")
console.log(square.classList.value)
square.classList.add("square")
console.log(square.classList.value)

//getAttribute()
console.log(square.getAttribute("src"))

//setAttribute()
square.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg")

//appendChild() & createElement
let contents = document.querySelector("ul");
let newPoint = document.createElement("li");
newPoint.innerText = "This is testing the appendChild function on the parent unordered list!"
contents.appendChild(newPoint);

//append
let after = document.createElement("h2")
after.innerText = "appendTest"
contents.append(after)

//prepend()
let before = document.createElement("h2")
before.innerText = "prependTest"
contents.prepend(before)

//removeChild()
contents.removeChild(after);

//remove()
document.querySelector('p').remove()

//parentElement
console.log(newPoint.parentElement)

//children
console.log(contents.children)

//nextSibling
console.log(before.nextSibling)

//previousSibling
console.log(newPoint.previousSibling)
