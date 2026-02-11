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

// Opening Surat Screen
const envelopeScreen = document.getElementById("envelopeScreen");
const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {
  envelopeScreen.style.opacity = "0";
  envelopeScreen.style.transition = "0.6s";
  setTimeout(() => {
    envelopeScreen.style.display = "none";
  }, 600);
});
