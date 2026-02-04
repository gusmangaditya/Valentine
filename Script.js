// Ambil semua foto
const photos = document.querySelectorAll('.gallery img');
let currentIndex = 0;

// Fungsi tampilkan foto
function showPhoto(index) {
  photos.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

// Next photo
document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % photos.length;
  showPhoto(currentIndex);
});

// Previous photo
document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  showPhoto(currentIndex);
});

// Inisialisasi pertama
showPhoto(currentIndex);
