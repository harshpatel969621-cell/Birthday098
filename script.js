const pages = document.querySelectorAll(".page");
const nextButtons = document.querySelectorAll(".nextBtn");
const openBtn = document.getElementById("openBtn");
const music = document.getElementById("music");

let currentPage = 0;

function showPage(index){
    pages.forEach(page=>page.classList.remove("active"));
    pages[index].classList.add("active");
}

openBtn.onclick=function(){
    currentPage=1;
    showPage(currentPage);

    if(music){
        music.play().catch(()=>{});
    }

    startSlideshow();
    startTypewriter();
    createHearts();
};

nextButtons.forEach(button=>{
    button.onclick=function(){
        currentPage++;

        if(currentPage>=pages.length){
            currentPage=pages.length-1;
        }

        showPage(currentPage);
    };
});

/* ---------- Slideshow ---------- */

let slideIndex=0;

function startSlideshow(){

const slides=document.querySelectorAll(".slide");

if(slides.length===0) return;

setInterval(()=>{

slides[slideIndex].classList.remove("active");

slideIndex++;

if(slideIndex>=slides.length){
slideIndex=0;
}

slides[slideIndex].classList.add("active");

},3000);

}

/* ---------- Typewriter ---------- */

const letter=`Happy Birthday My Baby ❤️

You are the most beautiful part of my life.

Thank you for making every day special.

I promise to stay beside you,
support you,
respect you,
and love you forever.

Happy Birthday Princess ❤️`;

function startTypewriter(){

const box=document.getElementById("typewriter");

if(!box) return;

let i=0;

box.innerHTML="";

const timer=setInterval(()=>{

box.innerHTML+=letter.charAt(i);

i++;

if(i>=letter.length){

clearInterval(timer);

}

},40);

}

/* ---------- Questions ---------- */

const questions=[

"❤️ Do you remember our first conversation?",

"🥰 What is your favourite memory with me?",

"🌹 When did you first smile because of me?",

"💖 Which photo of us do you love most?",

"🎂 What is your birthday wish today?",

"💕 Will you always stay with me?",

"💍 Forever together?"

];

let q=0;

const questionBox=document.getElementById("questionBox");
const questionBtn=document.getElementById("questionBtn");

if(questionBox){

questionBox.innerHTML=questions[0];

}

if(questionBtn){

questionBtn.onclick=function(){

q++;

if(q>=questions.length){

q=0;

}

questionBox.innerHTML=questions[q];

};

}

/* ---------- Floating Hearts ---------- */

function createHearts(){

const container=document.getElementById("hearts");

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

container.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

},300);

}
