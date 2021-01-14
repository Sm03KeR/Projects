    var scores, activePlayer, roundScore, gamePlaying;

    init();

    document.querySelector('.btn-roll').addEventListener('click', function(){
        if(gamePlaying){
            var dice = Math.floor( Math.random() * 6) + 1; 

            var diceDOM = document.querySelector('.dice');
            diceDOM.src = 'dice-' + dice + '.png';
            
             // cand dam click pe butonul btn roll, de declanseaza functia de mai sus care da un nr random de la 1 la 6 si afiseaza pe zar nr random dat, schimband imaginea zarului prin acel frumos trick cu numele
            
    
             if(dice !== 1){   //verificam daca zarul e dif de 1
                 roundScore += dice;   // daca e atunci adaugam la scor ce pica la zar
                 document.querySelector('#current-' + activePlayer).textContent= roundScore;  //afisam rez.
             } else {
                nextPlayer();
             }
        }
 

    });

    document.querySelector('.btn-hold').addEventListener('click', function(){
        if(gamePlaying){
            scores[activePlayer] += roundScore;   // cand apas butonul hold punctele actuale se aduna cu cele ce sunt pe zar si si adunga la scorul final;

            document.querySelector('#score-' + activePlayer).textContent =  scores[activePlayer]; // se afiseaza in scorul global
    
            if(scores[activePlayer] >= 100){
                document.querySelector('#name-' + activePlayer).textContent = 'WINNER';  //daca se aduna peste 20 de p la global atunci apare WINNER
                gamePlaying= false;
            } else{
                nextPlayer(); // altfel trece la celalat jucator
            }
    
        }

    });



    document.querySelector('.btn-new').addEventListener('click', init);
        
    
function nextPlayer(){
    if(activePlayer === 0){    //daca pica unu, schimbam jucatorul activ din 1-0 so 0-1
        activePlayer= 1;
    } else{
        activePlayer = 0;
    }
    roundScore = 0;  //initializam din nou scorul cu 0

    document.getElementById('current-0').textContent = '0';   //initializam din nou scorul cu 0
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');  //cand se face trecerea de la 
    document.querySelector('.player-1-panel').classList.toggle('active');  //jucatori se schimba si clasele intre ele;
}


function init(){
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('#name-0').textContent = 'PLAYER 1';
    document.querySelector('#name-1').textContent = 'PLAYER 2';

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}