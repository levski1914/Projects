let modal=document.getElementById('mymodal');
let modalImg=document.getElementById('modalImg');
let span = document.getElementsByClassName('close')[0];
let arrowLeft=document.getElementById('prev');
let arrowNext=document.getElementById('next');

let thumbnails=document.querySelectorAll('.myImg');
let currentIndex=0;


arrowLeft.addEventListener('click',function(){
    let elem=thumbnails;
    if(currentIndex>0){
        currentIndex--;
    } else{
        currentIndex=thumbnails.length-1;
    }
    console.log(currentIndex)

    modalImg.src=elem[currentIndex].dataset.biggerSrc || elem[currentIndex].src;


})

//

arrowNext.addEventListener('click',function(){
    let elem=thumbnails;
    if(currentIndex<elem.length-1){
        currentIndex++;
    } else{
        currentIndex=0;
    }

    modalImg.src=elem[currentIndex].dataset.biggerSrc || elem[currentIndex].src;

    console.log(currentIndex)
})


//when click on current image to navigate to next image in the modal



document.addEventListener('click',(e)=>{
    const elem=e.target;
    const children=elem.children[0];
    if(elem.id==="myImg" ){
        modal.style.display="block";
        modalImg.src = children.dataset.biggerSrc || children.src;
        console.log('click')
    }


})

//loop through images and navigate through them






    


span.onclick=function(){
    modal.style.display="none";
}



// catering slider with only dots and no arrows without using translate

const slidesContainer=document.querySelector('.catering-slider');
const slides=document.querySelectorAll('.cater');
const sliderNav=document.querySelector('.controls-catering');

let currentSlide=0;
let slidesCount=slides.length;
let slideWidth=slides[0].clientWidth;


//getting the correct img to be the first
function init(){
    slides.forEach((img,i)=>{
        img.style.left =`${i * 100 }%`;
    })
}

init();


//add dots for slidernav
for(let i=0;i<slidesCount;i++){
    let dot=document.createElement('div');
    dot.classList.add('control');
    sliderNav.append(dot);


    dot.addEventListener('click',()=>{
        goToSlide(i);
    })
}

//set class active for first dot
sliderNav.children[0].classList.add('active')


//slide function

function goToSlide(slideNumber){
    slidesContainer.style.transform=`translateX(-${slideNumber * slideWidth}px)`;
    currentSlide=slideNumber;

    let currentDot=document.querySelector('.control.active');
    currentDot.classList.remove('active');
    sliderNav.children[slideNumber].classList.add('active')
}

window.onresize=function(){
    slideWidth=slides[0].clientWidth;
    goToSlide(currentSlide);
}

setInterval(function(){
    if(currentSlide<slidesCount-1){
        goToSlide(currentSlide+1);
    } else{
        goToSlide(0);
    }
},4000)



// function for fixed navbar on scroll
let navbar=document.getElementById('navbar');

let sticky=navbar.offsetTop;
function scroll(){
    
    if(window.pageYOffset>=sticky){
        navbar.classList.add('sticky');
    } else{
        navbar.classList.remove('sticky');
    }
}

window.onscroll=function(){
    scroll();
}