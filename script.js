emailjs.init("AcIX7_uEXxZyuGkRH"); // 👈 replace this

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const area = document.getElementById("area");
const success = document.getElementById("success");

/* 🤖 NO BUTTON AI */
noBtn.addEventListener("mouseover", () => {

    const rect = area.getBoundingClientRect();

    const maxX = rect.width - noBtn.offsetWidth;
    const maxY = rect.height - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

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
