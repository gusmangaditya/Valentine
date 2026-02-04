// Ambil semua foto di gallery
const photos = document.querySelectorAll('.gallery img');
let currentIndex = 0;

// Fungsi tampilkan foto sesuai index
function showPhoto(index) {
  photos.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

// Tombol Next
document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % photos.length;
  showPhoto(currentIndex);
});

// Tombol Previous
document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  showPhoto(currentIndex);
});

// Inisialisasi pertama
showPhoto(currentIndex);
