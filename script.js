emailjs.init("AcIX7_uEXxZyuGkRH"); // 👈 replace this

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const area = document.getElementById("area");
const success = document.getElementById("success");

/* 🤖 NO BUTTON AI */
const noBtn = document.getElementById("noBtn");
const area = document.getElementById("area");

let fearLevel = 1;

function moveNoButton(){

    const rect = area.getBoundingClientRect();

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = rect.width - btnWidth;
    const maxY = rect.height - btnHeight;

    fearLevel += 0.1;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    // keep inside bounds
    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // mobile vibration
    if(navigator.vibrate){
        navigator.vibrate(15);
    }
}

/* desktop */
noBtn.addEventListener("mouseenter", moveNoButton);

/* mobile */
noBtn.addEventListener("touchstart", (e)=>{
    e.preventDefault();
    moveNoButton();
});

    if (navigator.vibrate) {
        navigator.vibrate(20);
    }
});


/* 🎉 YES = SEND EMAIL */
yesBtn.addEventListener("click", () => {

    const date = document.querySelector("input[type='date']").value;
    const time = document.querySelector("input[type='time']").value;

    if (!date || !time) {
        alert("Pookie избери дата и час 😭");
        return;
    }

    // show UI success
    success.style.display = "block";

    setTimeout(() => {
        success.style.display = "none";
    }, 2000);

    // 📩 SEND EMAIL via EmailJS
    emailjs.send("service_7fwopee", "template_2rswok9", {
        date: date,
        time: time,
        message: "🍷 Someone accepted your cursed date invitation"
    })
    .then(() => {
        console.log("Email sent!");
    })
    .catch((err) => {
        console.error("Email error:", err);
    });

});
