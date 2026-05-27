const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");

const glitch = document.getElementById("glitch");
const jumpscare = document.getElementById("jumpscare");

const texts = [
    "no is not allowed",
    "error 404 free will missing",
    "try again (you can't)",
    "system says YES",
    "permission denied"
];

/* runaway NO button */
noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * 200;
    const y = Math.random() * 200;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    noBtn.innerText = texts[Math.floor(Math.random()*texts.length)];
});

/* YES */
yesBtn.addEventListener("click", () => {

    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    result.style.display = "block";

    if(!date || !time){
        result.innerHTML = "👁 pick date/time first";
        return;
    }

    result.innerHTML = `
        confirmed 🖤<br>
        ${date} ${time}
    `;
});

/* 💀 NO = glitch + jumpscare */
noBtn.addEventListener("click", () => {

    // glitch first
    glitch.style.display = "block";

    setTimeout(() => {

        glitch.style.display = "none";
        jumpscare.style.display = "block";

        const audio = new Audio("https://www.myinstants.com/media/sounds/movie_1.mp3");
        audio.volume = 0.8;
        audio.play();

        setTimeout(() => {
            jumpscare.style.display = "none";
        }, 1200);

    }, 500);
});
