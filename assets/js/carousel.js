document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll('.carousel-slide');
  let slideIndex = 0;

  function showSlide(n) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active', 'initial-active');
      if (i === n) slide.classList.add('active');
    });
  }

  window.plusSlides = function(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlide(slideIndex);
  };

  // Show first slide after page load to override initial-active
  showSlide(slideIndex);
});
