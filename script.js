// ================= Slideshow Foto =================
const photos = document.querySelectorAll('.gallery img');
let currentIndex = 0;

function showPhoto(index) {
  photos.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % photos.length;
  showPhoto(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  showPhoto(currentIndex);
});

showPhoto(currentIndex);

// ================= Musik Play/Pause =================
const audio = document.getElementById('localAudio');
const playBtn = document.getElementById('playToggle');

if (audio && playBtn) {
  playBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = "Pause Musik";
    } else {
      audio.pause();
      playBtn.textContent = "Play Musik";
    }
  });
}

// ================= Valentine Login Screen =================
const loginScreen = document.getElementById("valentineLogin");
const enterBtn = document.getElementById("enterBtn");

if (loginScreen && enterBtn) {
  enterBtn.addEventListener("click", () => {
    loginScreen.style.opacity = "0";
    loginScreen.style.transition = "0.8s";

    // auto play musik saat masuk (opsional)
    if (audio) {
      audio.play();
    }

    setTimeout(() => {
      loginScreen.style.display = "none";
    }, 800);
  });
}
