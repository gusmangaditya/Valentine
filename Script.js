// Ambil semua foto
const photos = document.querySelectorAll('.gallery img');
let currentIndex = 0;

// Fungsi untuk tampilkan foto sesuai index
function showPhoto(index) {
  photos.forEach((img, i) => {
    if(i === index) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
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

// Tampilkan foto pertama saat load
showPhoto(currentIndex);
