var textBox = document.querySelector('.text');
var btn = document.querySelector('.btn');
var lungime = document.querySelector('.lungime');
var copy_btn = document.querySelector('.copy');

function copy(id){
    var text = document.getElementById(id);
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text.innerText;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}

function randomNr(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function passwordGenerator() {
    var passLenght = randomNr(6,16);
    var pass = "1234567890qwertyuiopasdfghjklzxcvbnm[/{}>?QWERTYUIOPASDFGHJKLZXCVBNM";
    var password="";
    var n = pass.length;


    for (var i = 0; i < passLenght; i++) {
        password += pass.charAt(Math.floor(Math.random() * n));
    }
    textBox.innerHTML= password;
}


function passwordGeneratorCustom() {
    var passLenght = lungime.value;
    var pass = "1234567890qwertyuiopasdfghjklzxcvbnm[/{}>?QWERTYUIOPASDFGHJKLZXCVBNM";
    var password="";
    var n = pass.length;


    for (var i = 0; i < passLenght; i++) {
        password += pass.charAt(Math.floor(Math.random() * n));
    }
    textBox.innerHTML= password;
}

btn.addEventListener('click',function(){
    if(lungime.value>30){

        alert("Password is too long. Please enter a value <30");

    }else if(lungime.value!==""){

        passwordGeneratorCustom();

    }else{

        passwordGenerator();
    }
});

document.addEventListener('keydown',function(e){

    if(e.keyCode===13){
        if(lungime.value>30){

            alert("Password is too long. Please enter a value <30");
    
        }else if(lungime.value!==""){
    
            passwordGeneratorCustom();
    
        }else{
    
            passwordGenerator();
        }
    }

})
