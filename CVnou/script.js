var swiper = new Swiper('.swiper-container', {
    effect:'flip',
    grabCursor: false,
    speed:700,
    cubeEffect: {
      shadow: false,
      slideShadows: false,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
      },     
  });

var icon1 = document.querySelector('.icon1');
var icon2 = document.querySelector('.icon2');
var icon3 = document.querySelector('.icon3');
var icon4 = document.querySelector('.icon4');

var icon5 = document.querySelector('.icon5');
var icon6 = document.querySelector('.icon6');
var icon7 = document.querySelector('.icon7');
var icon8 = document.querySelector('.icon8');

var icon9 = document.querySelector('.icon9');
var icon10 = document.querySelector('.icon10');
var icon11 = document.querySelector('.icon11');
var icon12 = document.querySelector('.icon12');

var icon13 = document.querySelector('.icon13');
var icon14 = document.querySelector('.icon14');
var icon15 = document.querySelector('.icon15');
var icon16 = document.querySelector('.icon16');
var logo = document.querySelectorAll('.logo_link');
var contactBTN = document.querySelectorAll('.contactBTN');

logo.forEach(item=>{
    item.addEventListener('click',event=>{
        swiper.slideTo(0);
    });
});

contactBTN.forEach(item=>{
    item.addEventListener('click',event=>{
        swiper.slideTo(3);
    });
});


icon1.addEventListener('click',function(){
    swiper.slideTo(0);
});
icon2.addEventListener('click',function(){
    swiper.slideTo(1);
});
icon3.addEventListener('click',function(){
    swiper.slideTo(2);
});
icon4.addEventListener('click',function(){
    swiper.slideTo(3);
});


icon5.addEventListener('click',function(){
    swiper.slideTo(0);
});
icon6.addEventListener('click',function(){
    swiper.slideTo(1);
});
icon7.addEventListener('click',function(){
    swiper.slideTo(2);
});
icon8.addEventListener('click',function(){
    swiper.slideTo(3);
});


icon9.addEventListener('click',function(){
    swiper.slideTo(0);
});
icon10.addEventListener('click',function(){
    swiper.slideTo(1);
});
icon11.addEventListener('click',function(){
    swiper.slideTo(2);
});
icon12.addEventListener('click',function(){
    swiper.slideTo(3);
});


icon13.addEventListener('click',function(){
    swiper.slideTo(0);
});
icon14.addEventListener('click',function(){
    swiper.slideTo(1);
});
icon15.addEventListener('click',function(){
    swiper.slideTo(2);
});
icon16.addEventListener('click',function(){
    swiper.slideTo(3);
});


  var rand2= document.querySelectorAll('.q');
var text= document.querySelector('.text');

var home = document.querySelector('.home');
var about = document.querySelector('.about');
var list = document.querySelector('.list');
var email = document.querySelector('.email');

var img = document.querySelectorAll('.g');

function randomNr(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min);
 }
 
function randomColor(){
    return `rgb(${randomNr(0,255)}, ${randomNr(0,255)}, ${randomNr(0,255)})`;
}

function colorSwitch(e){
    if(e){

    e.addEventListener('mouseover',function(){
        e.style.color=randomColor();
        e.style.fontSize = '40px';
    });

    e.addEventListener('transitionend',function(){
        e.style.color='white';
        e.style.fontSize = '60px';
    });

    }
}

for(var j=0; j<=rand2.length; j++){
    colorSwitch(rand2[j]);
}

//LA PROJECTS SA PUN BUTON DE SURSE COD
//TOOL TIPURILE DIN NAV BAR SA LE FAC TOATE INTR O CULOARE PE RESPONSIVE 
//SCROLL SITE IN RESPONSIVE

/*
var mySwiper = new Swiper('.swiper-container', {
    effect: 'cube',
    grabCursor:true,
    cubeEffect: {
        shadow: false,
        slideShadows: false,
    },
    
  })*/

//_________________________________________HAMBURGER MENU___________________________________________

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav_bar_icon');
const text_slide1 = document.querySelector('.text');
const modelViewer = document.querySelector('.l1');

hamburger.addEventListener('click',function(){
    navLinks.classList.toggle('open');
    text_slide1.classList.toggle('slide_visibility');
    modelViewer.classList.toggle('slide_visibility');
    navLinks.addEventListener('click',function(){
        navLinks.classList.remove('open');
        text_slide1.classList.remove('slide_visibility');
        modelViewer.classList.remove('slide_visibility');
    });
});


const hamburger1 = document.querySelector('.hamburger1');
const navLinks1 = document.querySelector('.nav_bar_icon1');
const text_slide11 = document.querySelector('.name_s2');
const modelViewer1 = document.querySelector('.l2');

hamburger1.addEventListener('click',function(){
    navLinks1.classList.toggle('open1');
    text_slide11.classList.toggle('slide_visibility1');
    modelViewer1.classList.toggle('slide_visibility1');
    navLinks1.addEventListener('click',function(){
        navLinks1.classList.remove('open1');
        text_slide11.classList.remove('slide_visibility1');
        modelViewer1.classList.remove('slide_visibility1');
    });
});


const hamburger2 = document.querySelector('.hamburger2');
const navLinks2 = document.querySelector('.nav_bar_icon2');
const text_slide111 = document.querySelector('.grid-container');

hamburger2.addEventListener('click',function(){
    navLinks2.classList.toggle('open2');
    text_slide111.classList.toggle('slide_visibility2');
    navLinks2.addEventListener('click',function(){
        navLinks2.classList.remove('open2');
        text_slide111.classList.remove('slide_visibility2');
    });
});


const hamburger3 = document.querySelector('.hamburger3');
const navLinks3 = document.querySelector('.nav_bar_icon3');
const text_slide1111 = document.querySelector('.flex_contact');

hamburger3.addEventListener('click',function(){
    navLinks3.classList.toggle('open3');
    text_slide1111.classList.toggle('slide_visibility3');
    navLinks3.addEventListener('click',function(){
        navLinks3.classList.remove('open3');
        text_slide1111.classList.remove('slide_visibility3');
    });
});
//_________________________________________/HAMBURGER MENU___________________________________________



//_________SLIDER RESPONSIVE MODE________________//
var slides=document.querySelector('.slider-items').children;
var nextSlide=document.querySelector(".right-slide");
var prevSlide=document.querySelector(".left-slide");
var totalSlides=slides.length;
var index=0;

nextSlide.onclick=function () {
     next("next");
}
prevSlide.onclick=function () {
     next("prev");
}

function next(direction){

   if(direction=="next"){
      index++;
       if(index==totalSlides){
        index=0;
       }
   } 
   else if(direction=="prev"){
           if(index==0){
            index=totalSlides-1;
           }
           else{
            index--;
           }
    }

  for(i=0;i<slides.length;i++){
          slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");     

}


/*
function iconSwitch(e,clasa,nume,icon_class,icon_name){
    if(e){
        e.addEventListener('mouseover',function(){
        e.innerHTML=`<p class="${clasa}">${nume}</p>`; 
    });
    e.addEventListener('mouseout',function(){
        e.innerHTML=`<span class="material-icons ${icon_class}">${icon_name}</span>`;
    });
    }
}

iconSwitch(home,'home_aft','HOME','icon1','home');
iconSwitch(about,'home_aft','ABOUT','icon2','fingerprint');
iconSwitch(list,'home_aft','PROJECTS','icon3','list');
iconSwitch(email,'home_aft','CONTACT','icon4','email');
*/



let spinnerWrapper = document.querySelector('.spinner-wrapper');
let obj_3d = document.querySelector('model-viewer');

obj_3d.addEventListener('load', function () {
    // spinnerWrapper.style.display = 'none';
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
    window.load();
});



if(window.history.replaceState){
    window.history.replaceState(null, null, window.location.href);}  //sa nu se mai trimita mail ul cand dau refresh la pagina



var btnSent = document.querySelector('.btn_submit');
var iconSent = document.querySelector('.icon_sent');

btnSent.addEventListener('mouseover',function(){
   // iconSent.classList.toggle = 'iconSent_hover';
   iconSent.style.transform='translateX(10px)';
});
btnSent.addEventListener('mouseout',function(){
    // iconSent.classList.toggle = 'iconSent_hover';
    iconSent.style.transform='translateX(0px)';
 });


// ctrl+F5 hard reset browser





var delete_btn = document.querySelector('.delete');

delete_btn.addEventListener('click',function(){
    document.querySelector('.alert-success').classList.add('succes_fail_animation');

    delete_btn.addEventListener('transitionend',function(){
        document.querySelector('.alert-success').remove();
    });

    
});

delete_btn.addEventListener('click',function(){
    document.querySelector('.alert-error').classList.add('succes_fail_animation');

    delete_btn.addEventListener('transitionend',function(){
        document.querySelector('.alert-error').remove();
    });
});




