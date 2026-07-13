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

/* ---------- Fireworks ---------- */

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const particles = [];

function createFirework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * (canvas.height / 2);

    for (let i = 0; i < 40; i++) {
        particles.push({
            x,
            y,
            dx: (Math.random() - 0.5) * 8,
            dy: (Math.random() - 0.5) * 8,
            life: 60,
            color: `hsl(${Math.random() * 360},100%,60%)`
        });
    }
}

function animateFireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.x += p.dx;
        p.y += p.dy;
        p.dy += 0.03;
        p.life--;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        if (p.life <= 0) {
            particles.splice(i, 1);
        }
    }

    requestAnimationFrame(animateFireworks);
}

animateFireworks();

setInterval(createFirework, 1200);

const openBtn = document.getElementById("openBtn");
const bgMusic = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {
    bgMusic.volume = 0.6;
    bgMusic.play().catch(error => {
        console.log("Music couldn't start:", error);
    });
});
