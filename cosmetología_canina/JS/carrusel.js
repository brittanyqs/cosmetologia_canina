
  
  const carousel = document.querySelector('.carousel');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  let currentIndex = 0;
  
  function updateCarousel() {
      const totalItems = document.querySelectorAll('.carousel-item').length;
      const offset = -currentIndex * 100; // Calcula el desplazamiento
      carousel.style.transform = `translateX(${offset}%)`;
  }
  
  nextBtn.addEventListener('click', () => {
      const totalItems = document.querySelectorAll('.carousel-item').length;
      currentIndex = (currentIndex + 1) % totalItems; // Avanza al siguiente
      updateCarousel();
  });
  
  prevBtn.addEventListener('click', () => {
      const totalItems = document.querySelectorAll('.carousel-item').length;
      currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Retrocede al anterior
      updateCarousel();
  });
  