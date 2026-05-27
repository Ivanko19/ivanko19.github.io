
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
    const creatures = ["🦉", "🪶"];

function spawnCreature() {
    const el = document.createElement("div");

    // random creature
    el.innerText = creatures[Math.floor(Math.random() * creatures.length)];

    // style
    el.style.position = "fixed";
    el.style.left = Math.random() * 100 + "vw";
    el.style.bottom = "-40px";
    el.style.fontSize = (20 + Math.random() * 30) + "px";
    el.style.opacity = "0.7";
    el.style.zIndex = "999";

    // movement speed
    const duration = 4000 + Math.random() * 4000;

    document.body.appendChild(el);

    el.animate([
        { transform: "translateY(0px) rotate(0deg)", opacity: 0 },
        { transform: "translateY(-50vh) rotate(180deg)", opacity: 1 },
        { transform: "translateY(-110vh) rotate(360deg)", opacity: 0 }
    ], {
        duration: duration,
        easing: "linear"
    });

    setTimeout(() => el.remove(), duration);
}

/* spawn loop */
setInterval(spawnCreature, 600);
});
