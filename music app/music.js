const audioQ = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3');
const audioW = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3');
const audioE = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3');
const audioA = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3');
const audioS = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3');
const audioD = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3');
const audioZ = new Audio('https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3');
const audioX = new Audio('https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3');
const audioC = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3');

var q = document.querySelector('.q');
var w = document.querySelector('.w');
var e1 = document.querySelector('.e');
var a = document.querySelector('.a');
var s = document.querySelector('.s');
var d = document.querySelector('.d');
var z = document.querySelector('.z');
var x = document.querySelector('.x');
var c = document.querySelector('.c');

var volume1 = document.querySelector('.volume');
var valueNr = document.querySelector('.value');

valueNr.innerHTML = volume1.value;

volume1.oninput = function(){
    valueNr.innerHTML=this.value;
}






q.addEventListener('click',function(){
    audioQ.play();
    audioQ.volume=volume1.value/100;
});

w.addEventListener('click',function(){
    audioW.play();
    audioW.volume=volume1.value/100;
});

e1.addEventListener('click',function(){
    audioE.play();
    audioE.volume=volume1.value/100;
});

a.addEventListener('click',function(){
    audioA.play();
    audioA.volume=volume1.value/100;
});

s.addEventListener('click',function(){
    audioS.play();
    audioS.volume=volume1.value/100;
});

d.addEventListener('click',function(){
    audioD.play();
    audioD.volume=volume1.value/100;
});

z.addEventListener('click',function(){
    audioZ.play();
    audioZ.volume=volume1.value/100;
});

x.addEventListener('click',function(){
    audioX.play();
    audioX.volume=volume1.value/100;
});

c.addEventListener('click',function(){
    audioC.play();
    audioC.volume=volume1.value/100;
});


//random color
function randomNr(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min);
 }
 
 function randomColor(){
    return `rgb(${randomNr(0,255)}, ${randomNr(0,255)}, ${randomNr(0,255)})`;
 }


document.addEventListener('keydown',function(e){
    if(event.keyCode === 81){
        audioQ.play();
        q.style.backgroundColor = randomColor();
        audioQ.volume=volume1.value/100;
    }
});

document.addEventListener('keydown',function(e){
    if(event.keyCode === 87){
        audioW.play();
        w.style.backgroundColor = randomColor();
        audioW.volume=volume1.value/100;
    }
});

document.addEventListener('keydown',function(e){
    if(event.keyCode === 69){
        audioE.play();
        e1.style.backgroundColor = randomColor();
        audioE.volume=volume1.value/100;
    }
});

document.addEventListener('keydown',function(e){
    if(event.keyCode === 65){
        audioA.play();
        a.style.backgroundColor = randomColor();
        audioA.volume=volume1.value/100;
    }
});

document.addEventListener('keydown',function(e){
    if(event.keyCode === 83){
        audioS.play();
        s.style.backgroundColor = randomColor();
        audioS.volume=volume1.value/100;
    }
});

document.addEventListener('keydown',function(e){
    if(event.keyCode === 68){
        audioD.play();
        d.style.backgroundColor = randomColor();
        audioD.volume=volume1.value/100;
    }
});

document.addEventListener('keydown',function(e){
    if(event.keyCode === 90){
        audioZ.play();
        z.style.backgroundColor = randomColor();
        audioZ.volume=volume1.value/100;
    }
});

document.addEventListener('keydown',function(e){
    if(event.keyCode === 88){
        audioX.play();
        x.style.backgroundColor = randomColor();
        audioX.volume=volume1.value/100;
    }
});

document.addEventListener('keydown',function(e){
    if(event.keyCode === 67){
        audioC.play();
        c.style.backgroundColor = randomColor();
        audioC.volume=volume1.value/100;
    }
});