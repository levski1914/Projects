const heroImages=[
    {image:"han-solo.png"},{image:"darth vader.png"}
];

const heroNames=[
    {name:"Han Solo", desc:"Sith Lord and former Jedi"},
    {name:"Darth Vader", desc:"Captain of the MIllenium Falcon"}
];

let currentHeroIndex=0;
const heroImageElement=document.getElementById("heroImage");
const heroNameElement=document.getElementById('heroName');
const heroDescElement=document.getElementById('heroDesc');
const nextHeroImageElement=document.getElementById("nextHeroImage");
const nextHero=document.getElementById("nextHero");
const previousHero=document.getElementById("previousHero");

function updateSlider(){
    const currentHero=heroImages[currentHeroIndex];
    const currentHeroName=heroNames[currentHeroIndex];

    heroImageElement.src=currentHero.image;
    heroNameElement.textContent=currentHeroName.name;
    heroDescElement.textContent=currentHeroName.desc;

    const nextHeroIndex=(currentHeroIndex + 1)% heroImages.length;
    const nextHero=heroImages[nextHeroIndex];
    nextHeroImageElement.src=nextHero.image;
}

nextHero.addEventListener('click',()=>{
    currentHeroIndex=(currentHeroIndex+1)%heroImages.length;
    updateSlider();
});

previousHero.addEventListener('click',()=>{
    currentHeroIndex=(currentHeroIndex - 1 + heroImages.length)% heroImages.length;
    updateSlider();
})



updateSlider();
