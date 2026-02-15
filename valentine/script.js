function openLetter() {
    const envelope = document.querySelector(".envelope");
    envelope.classList.add("open");

    const music = document.getElementById("music");
    music.play();

    // Surat tetap muncul di atas amplop tapi di bawah header
    document.querySelector(".letter").style.zIndex = 4;
}

function closeLetter(e) {
    e.stopPropagation();
    const letter = document.querySelector(".letter");
    document.querySelector(".envelope").classList.remove("open");

    const music = document.getElementById("music");
    music.pause();
    music.currentTime = 0;

    letter.style.zIndex = 2; // reset
}

function nextPage() {
    window.location.href = "page2.html";
}

/* Bunga jatuh */
function createPetal(){
    const petal = document.createElement("div");
    petal.classList.add("petal");

    petal.style.left = Math.random()*100 + "vw";
    petal.style.animationDuration = (5 + Math.random()*5) + "s";
    petal.style.opacity = Math.random();

    document.querySelector(".flowers").appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },10000);
}

setInterval(createPetal,300);