// DOM
let divs = document.getElementsByTagName('div')
console.log(divs) // HTMLCollection

let divs2 = document.getElementsByClassName('xx')
console.log(divs2) // HTMLCollection

let divs3 = document.querySelectorAll('.xx')
console.log(divs3) // NodeList