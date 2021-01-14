


function randomNr(min,max){
   return Math.floor(Math.random()*(max - min + 1) + min);
}

function randomColor(){
   return `rgb(${randomNr(0,255)}, ${randomNr(0,255)}, ${randomNr(0,255)})`;
}

const btn = document.querySelector('.btn');
const body = document.querySelector('body');
const culoare = document.querySelector('.culoare');

btn.addEventListener('click',function(){
    var random = randomColor();
    body.style.backgroundColor = random;
    culoare.innerHTML = `RGB COLOR:  ${random}`;
});

















