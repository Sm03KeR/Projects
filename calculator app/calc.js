var calcul = document.querySelector(".calcul");


function calculator(e){
    var buton = e.innerHTML;
    

    if(buton === "="){
        calcul.innerHTML = eval(calcul.innerHTML);
    }else if(buton === "AC"){
        calcul.innerHTML = '0';
    }else{ //daca e apasat ori care alt buton si in calcul este 0
        if(calcul.innerHTML === "0"){
            calcul.innerHTML = buton; //pe calculator se afiseaza butonul apasat
        }else{
            calcul.innerHTML += buton;//altfel se afiseaza in continuare ex: daca era scris deja 2 si se apasa 3 => 23
        }
            
    }
}