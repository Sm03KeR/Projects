const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputText = document.querySelector('.inputText');
const deleteAllBtn = document.querySelector('.delete_all');

const list = document.querySelector('.list');




var map,event1,e,nr=0;

var date = new Date();
var data = date.getDate() +" "+ months[date.getMonth()];




if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition(
        function(pozitie){
            var latitudine = pozitie.coords.latitude;
            var longitudine =  pozitie.coords.longitude;
            var coordonate = [latitudine, longitudine];
            console.log(coordonate);
             map = L.map('map').setView(coordonate, 12);

            L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {  //adaug mapa
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker(coordonate).addTo(map)  //adaug punctul si scrisul de deasupra
            .bindPopup(L.popup({
                autoClose:false,
                closeOnClick: false,
                className: 'cur-popup',
            })
            )
            .setPopupContent('Your current location')
            .openPopup();


            map.on('click', function(event1){  //cand dau click pe mapa imi apare form-ul si ii dau focus primei casute din form
                e=event1;
                form.classList.remove('hidden');
                inputText.focus();
                document.querySelector('.act').classList.add('form__row--hidden');
            });

        },
        function(){
            alert("Activate your location");
        });

}


form.addEventListener('submit',function(eve){ //dupa ce am dat submit la form sau cand apas enter
    eve.preventDefault();

    //dupa ce am submit la form (enter) imi apare punctul cu mesajul pe mapa(harta)
    const lat = e.latlng.lat;  
    const long = e.latlng.lng;
    const coord = [lat,long];
    
    var layer = L.marker(coord).addTo(map) //memorez punctele de pe harta
    
    .bindPopup(L.popup({
        autoClose:false,
        closeOnClick: false,
        className: 'running-popup',
    })
    )
    .setPopupContent( `<li class="workout1 workout--running1" data-id="1234567890">
        <h2 class="workout__title">${inputText.value} on ${data}</h2>
        <div class="workout__details1">
          <span class="workout__icon">🏃‍♂️</span>
          <span class="workout__value">${inputDistance.value}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details1">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${inputDuration.value}</span>
          <span class="workout__unit">min</span>
        </div>
      </li>`) //casuta de pe harta (de deasupra mark-erului)
 
   
    .openPopup();

    form.classList.add('hidden');

//ADD CONTAINER



    var insert  = ` <li class="workout workout--running" data-id="1234567890">
                                        <h2 class="workout__title">${inputText.value} on ${data}</h2>
                                        <div class="workout__details">
                                        <span class="workout__icon">🏃‍♂️</span>
                                        <span class="workout__value">${inputDistance.value}</span>
                                        <span class="workout__unit">km</span>
                                        </div>
                                        <div class="workout__details">
                                        <span class="workout__icon">⏱</span>
                                        <span class="workout__value">${inputDuration.value}</span>
                                        <span class="workout__unit">min</span>
                                        </div>
                                        <button class="x-btn">X</button>
                                    </li>`;

    
    form.insertAdjacentHTML('afterend',insert); //adaug lista 
      
    
    deleteAllBtn.addEventListener('click',function(e){
        
        var deleteAll = document.querySelectorAll('.workout');
        layer.remove();
        for(var i=0;i<=deleteAll.length;i++){
            deleteAll[i].remove();
        } 
        
    });

    document.querySelector('.x-btn').addEventListener('click',function(e){  //cand apas pe X
        
        e.target.parentNode.classList.add('animatie'); //se face animatia

        e.target.parentNode.addEventListener('transitionend',function(){   //dupa ce se temina animatia
            e.target.parentNode.remove();  //sterg elemetul din lista
            layer.remove(); //sterg si elemetul său corespunzator de pe harta
        });
    });

    document.querySelector('.workout').addEventListener('click',function(){
        //layer  metoda: setView

         map.setView([layer._latlng.lat,layer._latlng.lng]); //ma duce cu camera la coordonatele indicate de punctul pe care am dat click
    });
   

    //clear input, dupa fiecare enter se goleste de valorile anterioare
    inputDistance.value=""; 
    inputDuration.value="";
    inputText.value="";

});