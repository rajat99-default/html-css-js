let currentIndex = 0;
  const totalSlides = 3;

  function showSlide(index) {
    const carouselWrapper = document.getElementById('carouselWrapper');
    const offset = -index * 100;
    carouselWrapper.style.transform = `translateX(${offset}%)`;
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }