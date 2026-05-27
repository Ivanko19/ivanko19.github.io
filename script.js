const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const area = document.getElementById("area");
const result = document.getElementById("result");

const glitch = document.getElementById("glitch");
const jumpscare = document.getElementById("jumpscare");

/* YES */
yesBtn.addEventListener("click", () => {

    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if(!date || !time){
        result.innerHTML = "👁 choose date/time first";
        return;
    }

    result.innerHTML = `confirmed 🖤<br>${date} ${time}`;
});


/* 🤖 AI NO BUTTON */
noBtn.addEventListener("mouseover", (e) => {

    const areaRect = area.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = areaRect.width - btnRect.width;
    const maxY = areaRect.height - btnRect.height;

    const mouseX = e.clientX - areaRect.left;
    const mouseY = e.clientY - areaRect.top;

    // AI logic: if user is close → run away faster
    const distanceX = Math.abs(mouseX - noBtn.offsetLeft);
    const distanceY = Math.abs(mouseY - noBtn.offsetTop);

    let moveX = Math.random() * maxX;
    let moveY = Math.random() * maxY;

    if(distanceX < 80 && distanceY < 80){
        // panic mode
        moveX = Math.random() * maxX;
        moveY = Math.random() * maxY;
    }

    noBtn.style.left = moveX + "px";
    noBtn.style.top = moveY + "px";
});


/* 💀 CLICK = glitch + jumpscare */
noBtn.addEventListener("click", () => {

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
