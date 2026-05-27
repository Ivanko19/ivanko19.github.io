emailjs.init("YOUR_PUBLIC_KEY");

/* elements */
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const area = document.getElementById("area");
const success = document.getElementById("success");

/* fake no messages */
const noMessages = [
    "ERROR: NO unavailable 💀",
    "system blocked rejection 😭",
    "nice try 👁️",
    "ravens chose YES 🪶",
    "escape failed 😂",
    "denied by cursed AI"
];

/* floating ravens + owls */
const creatures = ["🦉","🪶"];

function spawnCreature(){

    const el = document.createElement("div");

    el.innerText =
        creatures[Math.floor(Math.random()*creatures.length)];

    el.style.position = "fixed";
    el.style.left = Math.random()*100 + "vw";
    el.style.bottom = "-40px";

    el.style.fontSize =
        (20 + Math.random()*30) + "px";

    el.style.opacity = "0.7";

    el.style.pointerEvents = "none";

    el.style.zIndex = "1";

    document.body.appendChild(el);

    const duration = 4000 + Math.random()*3000;

    el.animate([
        {
            transform:"translateY(0px) rotate(0deg)",
            opacity:0
        },

        {
            transform:"translateY(-50vh) rotate(180deg)",
            opacity:1
        },

        {
            transform:"translateY(-120vh) rotate(360deg)",
            opacity:0
        }

    ],{
        duration:duration,
        easing:"linear"
    });

    setTimeout(()=>{
        el.remove();
    },duration);
}

setInterval(spawnCreature,700);

/* YES BUTTON */
yesBtn.addEventListener("click", () => {

    const date =
        document.getElementById("date").value;

    const time =
        document.getElementById("time").value;

    if(!date || !time){
        alert("choose date & time 😭");
        return;
    }

    success.style.display = "block";

    if(navigator.vibrate){
        navigator.vibrate([100,50,100]);
    }

    /* EMAIL SEND */
    emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
            date:date,
            time:time,
            message:"🍷 someone accepted the cursed invitation"
        }
    );

    setTimeout(()=>{
        success.style.display = "none";
    },2000);
});


/* NO BUTTON */
function moveNoButton(){

    const areaRect =
        area.getBoundingClientRect();

    const btnWidth =
        noBtn.offsetWidth;

    const btnHeight =
        noBtn.offsetHeight;

    const maxX =
        areaRect.width - btnWidth;

    const maxY =
        areaRect.height - btnHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    noBtn.innerText =
        noMessages[
            Math.floor(Math.random()*noMessages.length)
        ];

    if(navigator.vibrate){
        navigator.vibrate(20);
    }
}

/* desktop */
noBtn.addEventListener(
    "mouseenter",
    moveNoButton
);

/* mobile */
noBtn.addEventListener(
    "touchstart",
    (e)=>{
        e.preventDefault();
        moveNoButton();
    }
);
