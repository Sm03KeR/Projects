console.log('hi');

const ora = document.querySelector('.hour');
const minut = document.querySelector('.minute');
const secunda = document.querySelector('.secunde');
const data = document.querySelector('.data');
function getTimes(){
    const date = new Date();
    ora.innerHTML = date.getHours();
    minut.innerHTML = date.getMinutes();
    secunda.innerHTML = date.getSeconds();
}
getTimes();
setInterval(getTimes,1000);

function hello(){
    return 'Hello World!';
}
console.log(hello());
