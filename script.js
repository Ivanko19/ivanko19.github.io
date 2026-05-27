
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const area = document.getElementById("area");
const success = document.getElementById("success");

/* 🤖 behavior memory */
let fearLevel = 1;

/* 🎉 YES */
yesBtn.addEventListener("click", () => {

    success.style.display = "block";

    /* vibration (mobile trick) */
    if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100]);
    }

    setTimeout(() => {
        success.style.display = "none";
    }, 2000);
});


/* 😂 NO BUTTON LEARNS YOUR BEHAVIOR */
noBtn.addEventListener("mouseover", (e) => {

    const rect = area.getBoundingClientRect();

    const maxX = rect.width - 90;
    const maxY = rect.height - 50;

    // AI gets faster over time
    fearLevel += 0.2;

    let x = Math.random() * maxX * fearLevel;
    let y = Math.random() * maxY * fearLevel;

    // clamp so it stays inside
    x = Math.min(maxX, x);
    y = Math.min(maxY, y);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    /* mobile vibration on near escape */
    if (navigator.vibrate) {
        navigator.vibrate(20);
    }
});
