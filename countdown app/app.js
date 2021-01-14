const day = document.querySelector('.day');
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');


function countdownNewYear(){

    var dateNewYear =new Date("1 Jan 2022");
    var curDate = new Date();
    //console.log(curDate.getDate());

    var totalSecundes = (dateNewYear-curDate) / 1000;


    var days =Math.floor(totalSecundes/3600/24);
    var hours = Math.floor(totalSecundes/3600) % 24;
    var minute = Math.floor(totalSecundes/60) % 60;
    var secunde = Math.floor(totalSecundes)%60;


    day.innerHTML = days;
    hour.innerHTML = hours;
    min.innerHTML = minute;
    sec.innerHTML = secunde;
}


countdownNewYear();
setInterval(countdownNewYear,1000);