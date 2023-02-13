//getElementById
const banner1 = document.getElementById('banner');
console.log(banner1);

const allImages = document.getElementsByTagName('img');
console.log(allImages);

/*
for (let image of allImages) {
    image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg"
}
*/

const allSquares = document.getElementsByClassName('square');
console.log(allSquares);

/*
for (let square of allSquares) {
    square.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg"
}
*/

const link1 = document.querySelector('p a'); // gets first link (anchor tag in paragraph) in document
console.log(link1);
const links = document.querySelectorAll('p a'); // gets all links in document
console.log(links);

for (let link of links) {
    console.log(link.href);
}

const images = document.querySelector('p'); // querySelector with tags
const banner = document.querySelector("#banner"); //querySelector with IDs
const squares = document.querySelector(".square"); //querySelector with classes
const java = document.querySelector('a[title="Java"'); //querySelector with specific attributes

console.log(images);
console.log(banner);
console.log(squares);
console.log(java);

