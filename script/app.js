"use strict";

let cart=document.getElementById('cart-1');
let cartMenu=document.getElementById('cart');
let html=document.getElementsByTagName('html')[0];

let close=document.getElementById('close');


close.addEventListener('click',function(e){
    html.classList.toggle('hide');
    e.stopPropagation();
});

function show(event){
    html.classList.toggle('hide');
    event.stopPropagation();
}

cartMenu.addEventListener('click',function(e){
    console.log("clicked");
    e.stopPropagation();
});

let setting=document.querySelector('.setting');
let settingMenu=document.querySelector('.settings');



setting.addEventListener('click',function(e){
    setting.classList.toggle('hide');
    if(settingMenu.offsetHeight===0){
        settingMenu.style.borderTop='3px solid #000';
    }else{
        settingMenu.style.borderTop='0';
    }
    
    // e.stopPropagation();
});

settingMenu.addEventListener('click',function(e){
    e.stopPropagation();
});





window.addEventListener('click',(e)=>{
    if(!cart.contains(e.target)){
        html.classList.remove('hide');
    }
})


function slider(){
    const carouselSlides=document.querySelectorAll('.newTech');
    const btnPrev=document.querySelector('.prev');
    const btnNext=document.querySelector('.next');
    let currentSlide=0;

    const changeSlide=function(slides){
        carouselSlides.forEach((slide,index)=>(slide.style.transform=`translateX(${100*(index-slides)}%)`)); 
        //what is the meaning of above line of code?
        // 100*(index-slides) is the value of transform property of slide 
        //index is the index of slide in carouselSlides
        //slides is the currentSlide
        //slide is the element of carouselSlides 
        //example of 100*(index-slides) is 100*(0-0)=0 100*(1-0)=100 100*(2-0)=200
    };

    
    btnNext.addEventListener('click',function(){
        currentSlide++;
        if(carouselSlides.length-1<currentSlide){
            currentSlide=0;
            //carouselSlides.length-1 is the last index of carouselSlides
        }
        changeSlide(currentSlide) //what is the meaning of this line of code?
        //changeSlide is a function that change the slide
        //currentSlide is the index of current slide

    })
    btnPrev.addEventListener('click',function(){
        currentSlide--;
        if(currentSlide<0){
            currentSlide=carouselSlides.length-1;
        }
        changeSlide(currentSlide)
    })
}


 
slider(); 
//set time to change slide
setInterval(function(){
    document.querySelector('.next').click();
},5000);






//productslide

const carousel =document.querySelector('.products-slider'),
firstProduct=document.querySelectorAll('.products-slider img')[0],
arrowIcons=document.querySelectorAll('.btns');

let isDragStart=false, prevPageX, prevScrollLeft;
let firstProductWidth=firstProduct.clientWidth + 71.36;
let scrollWidth=carousel.scrollWidth - carousel.clientWidth;


const showHideIcons=()=>{
     arrowIcons[0].style.display=carousel.scrollLeft==0 ? 'none' : 'block' ;
     arrowIcons[1].style.display=carousel.scrollLeft==scrollWidth ? 'none' : 'block' ;
}

arrowIcons.forEach(icon=>{
    icon.addEventListener('click',()=>{
        //if clicked icon is left, reduce width value from the carousel scroll left else add to it 
        carousel.scrollLeft +=icon.id=="left" ? -firstProductWidth : firstProductWidth;
        setTimeout(()=>showHideIcons(),60);
    })
})

const dragStart=(e)=>{
    isDragStart=true;
    prevPageX=e.pageX;
    prevScrollLeft=carousel.scrollLeft;
}

const dragging=(e)=>{
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff=e.pageX - prevPageX
    carousel.scrollLeft=prevScrollLeft-positionDiff;
}

const dragStop= () =>{
    carousel.classList.remove("dragging");
    isDragStart=false;

}

carousel.addEventListener('mousedown',dragStart);
carousel.addEventListener('mousemove',dragging);
carousel.addEventListener('mouseup',dragStop);
carousel.addEventListener('mouseleave',dragStop);





//select list of buttons and when click on button change the color of button 
//and when click on another button change the color of another button and remove the color of previous button

const btns=document.querySelectorAll('.tab-homeproduct');

btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        btns.forEach(btn=>btn.classList.remove('active'));
        btn.classList.add('active');
    })
});


function dealOfDay(){
    const carouselSlides=document.querySelector('.deal-slider');
    const btns=document.querySelectorAll('.btn');
    let firstDeal=document.querySelectorAll('.deal .deal-img')[0];
    let dealWidth=firstDeal.clientWidth + 471.36;


    btns.forEach(btn=>{
        btn.addEventListener('click',()=>{
            carouselSlides.scrollLeft=btn.id=="left-1"?-dealWidth : dealWidth; 

        })
    })
}

dealOfDay();


function latestBlog(){
    const carousel = document.querySelector('.blogs-slider');
    const btns=document.querySelectorAll('.btns');
    let firstBlog=document.querySelectorAll('.blog img')[0];
    let blogWidth=firstBlog.clientWidth+300;

    btns.forEach(btn=>{
        btn.addEventListener('click',()=>{
            carousel.scrollLeft+=btn.id=="left"?-blogWidth:blogWidth;
        })
    })

}

latestBlog();


//brand slider
    const carousel1=document.querySelector('.wrapper');
    const btns1=document.querySelectorAll('.button');

    let firstBrandWidth=document.querySelectorAll('.manufacturer')[0];
    let brandWidth=firstBrandWidth.clientWidth + 204;

    let isDragStart1=false,prevPageX1,prevScrollLeft1;
    let scrollWidth1=carousel1.scrollWidth - carousel1.clientWidth;

    //without this

    btns1.forEach(btn=>{
        btn.addEventListener('click',()=>{
            carousel1.scrollLeft+=btn.id=="left"?-brandWidth:brandWidth;
        })
    })

    const dragStart1=(e)=>{
        isDragStart1=true;
        prevPageX1=e.pageX;
        prevScrollLeft1=carousel1.scrollLeft;
    }

    const dragging1=(e)=>{
        if(!isDragStart1) return;
        e.preventDefault();
        carousel1.classList.add("dragging");
        let positionDiff1=e.pageX - prevPageX1;
        carousel1.scrollLeft=prevScrollLeft1-positionDiff1;
    }

    const dragStop1=()=>{
        carousel1.classList.remove("dragging");
        isDragStart1=false;
    }

    carousel1.addEventListener('mousedown',dragStart1);
    carousel1.addEventListener('mousemove',dragging1);
    carousel1.addEventListener('mouseup',dragStop1);
    carousel1.addEventListener('mouseleave',dragStop1);

