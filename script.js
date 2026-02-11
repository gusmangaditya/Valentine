// Slideshow Foto
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

// Musik Play/Pause
const audio = document.getElementById('localAudio');
const playBtn = document.getElementById('playToggle');

if (audio && playBtn) {
  playBtn.addEventListener('click', () => {
    if(audio.paused){
      audio.play();
      playBtn.textContent = "Pause Musik";
    } else {
      audio.pause();
      playBtn.textContent = "Play Musik";
    }
  });
}

// LOGIN VALENTINE SCREEN
const enterBtn = document.getElementById("enterBtn");
const screen = document.getElementById("valentineScreen");
const mainContent = document.getElementById("mainContent");

if (mainContent) {
  mainContent.style.display = "none";
}

if (enterBtn) {
  enterBtn.addEventListener("click", () => {
    screen.style.display = "none";
    mainContent.style.display = "block";
  });
}
