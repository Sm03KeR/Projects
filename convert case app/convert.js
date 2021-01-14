const convertText = document.querySelector('.text-case');
const convertCase = document.querySelector('.convert-case');

const capitalize = document.querySelector('.capitalizee');

const convertBtn = document.querySelector('.btn');
const convertBtn1 = document.querySelector('.btn1');
const convertBtn2 = document.querySelector('.btn2');
const copyBtn = document.querySelector('.btn-copy');

const copyText = document.querySelector('.copy');


copyBtn.addEventListener('click',function(){
    copyText.classList.remove('hidden');
    setInterval(function(){ 
        copyText.classList.add('hidden');

     }, 2000);

     //sa o fac cu toogle si sa ii pun tranzitie
});
   




function transformUpperCase(){

    var text = convertText.value;
    convertCase.innerText = text.toUpperCase();

}

function transformLowerCase(){

    var text = convertText.value;
    convertCase.innerText = text.toLowerCase();

}


function transformCapitalizeCase(str) {
    str = str.toLowerCase().split(' ');  //str - cuv/prop pe care o bag, prima data il fac tot cu litere mici,apoi il trnasform intr un vector
    for (var i = 0; i < str.length; i++) { //parcurg vectorul ce contine cuvintele 
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);   //iau fiecare cuvant in parte si il descompun in doua, prima litera,pe care o transform in litera mare + restul cuvantului pe care il atasez dupa
    }

    convertCase.innerHTML = str.join(' '); //returnez/afisez propozitia cu primele litere mari, funtia join transforma vectorul din nou intr-un sir
  }

  function copyElementText(id) {
    var text = document.getElementById(id);
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text.innerHTML;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);

}



convertBtn.addEventListener('click',function(){
    if(convertText.value!==""){
        transformUpperCase();
    }else{
        alert("Enter a value");
    }
});


convertBtn1.addEventListener('click',function(){
    if(convertText.value!==""){
        transformLowerCase();
    }else{
        alert("Enter a value");
    }
});


convertBtn2.addEventListener('click',function(){
    if(convertText.value!==""){
        transformCapitalizeCase(convertText.value);

    }else{
        alert("Enter a value");
    }

});


const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.container')

let load = 0;

let int = setInterval(blurring, 20);

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}




const slide_btn=document.querySelector('.slide_btn1');
const body1 = document.getElementsByTagName('body')[0];
const convert_container = document.querySelector('.convert-container');
const slide_btn1 = document.querySelector('.slide_btn');

slide_btn.addEventListener('click',function(){
    slide_btn.classList.toggle('slide_btn1_press');
    body1.classList.toggle('night');
    convert_container.classList.toggle('night1');
    slide_btn.classList.toggle('slide_btn1_night');
    slide_btn1.classList.toggle('slide_btn_night');
    
   console.log('sal');
});