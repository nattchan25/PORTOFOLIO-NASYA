document.addEventListener('DOMContentLoaded', function () {
  // ================================
  // 📸 Slider untuk semua section
  // ================================
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll(".slide");
    const prevBtn = slider.querySelector(".prev");
    const nextBtn = slider.querySelector(".next");
    let currentIndex = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
      });
    }

    // tampilkan slide pertama
    showSlide(currentIndex);

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
      });

      nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
      });
    }
  });

  // ================================
  // 📝 Form Submit ke Google Sheets
  // ================================
  const form = document.getElementById('formku');
  const status = document.getElementById('status');
  const scriptURL = 'https://script.google.com/macros/s/AKfycbw827it5kWqHLl7gLgXtqNp5YWgj3mEhy6Zwc1vjlPNDcD0cZZn9eookAh5FEq6mCc/exec';

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const data = new FormData(form);
      if (status) status.innerText = "Mengirim...";

      fetch(scriptURL, { method: 'POST', body: data })
        .then(response => {
          if (status) status.innerText = "✅ Data berhasil dikirim!";
          form.reset();
        })
        .catch(error => {
          if (status) status.innerText = "❌ Gagal mengirim data.";
          console.error('Error!', error.message);
        });
    });
  }
  // Ambil semua tombol tab dan kontennya
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

// Event klik untuk tiap tombol
tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.dataset.tab;

    // Hapus semua aktif
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    // Aktifkan tab yang dipilih
    button.classList.add("active");
    document.getElementById(target).classList.add("active");
  });
});
});