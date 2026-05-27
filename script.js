const glitch = document.getElementById('glitch');

/* 💀 JUMPSCARE SEQUENCE */
noBtn.addEventListener('click', () => {

    // 1. show glitch first
    glitch.style.display = "block";

    // 2. sound (optional horror hit)
    const audio = new Audio("https://www.myinstants.com/media/sounds/windows-error-sound-effect.mp3");
    audio.volume = 0.8;
    audio.play();

    // 3. after short delay → jumpscare
    setTimeout(() => {
        glitch.style.display = "none";
        scare.style.display = "flex";

        const scream = new Audio("https://www.myinstants.com/media/sounds/movie_1.mp3");
        scream.volume = 0.9;
        scream.play();

        setTimeout(() => {
            scare.style.display = "none";
        }, 1200);

    }, 500);
});
