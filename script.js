emailjs.init("AcIX7_uEXxZyuGkRH"); // 👈 replace this

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const area = document.getElementById("area");
const success = document.getElementById("success");

/* 🤖 NO BUTTON AI */
let fearLevel = 1;

noBtn.addEventListener("mouseover", () => {

    const rect = area.getBoundingClientRect();

    const maxX = rect.width - 90;
    const maxY = rect.height - 50;

    fearLevel += 0.15;

    let x = Math.random() * maxX * fearLevel;
    let y = Math.random() * maxY * fearLevel;

    x = Math.min(maxX, x);
    y = Math.min(maxY, y);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

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
