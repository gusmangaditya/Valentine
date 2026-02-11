// ===== SLIDESHOW GITHUB IMG =====
const photos = document.querySelectorAll(".gallery img");
let currentIndex = 0;

function showPhoto(i){
  photos.forEach((img) => img.classList.remove("active"));
  photos[i].classList.add("active");
}

document.getElementById("next").onclick = () => {
  currentIndex = (currentIndex + 1) % photos.length;
  showPhoto(currentIndex);
};

document.getElementById("prev").onclick = () => {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  showPhoto(currentIndex);
};

showPhoto(currentIndex);


// ===== MUSIK =====
const audio = document.getElementById("localAudio");
const playBtn = document.getElementById("playToggle");

playBtn.onclick = () => {
  if(audio.paused){
    audio.play();
    playBtn.textContent = "Pause Musik";
  }else{
    audio.pause();
    playBtn.textContent = "Play Musik";
  }
};


// ===== SURAT LOGIN =====
const letterScreen = document.getElementById("letterScreen");
const mainContent = document.getElementById("mainContent");
const openLetter = document.getElementById("openLetter");

openLetter.onclick = () => {
  letterScreen.style.display = "none";
  mainContent.style.display = "block";
  audio.play();
};
