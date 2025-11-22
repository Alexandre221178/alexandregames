(function() {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  if (!track || slides.length === 0) return;

  let slidesPerView = window.innerWidth <= 768 ? 1 : 2;
  let index = 0;

  // aplica a variável CSS no container para controlar o flex-basis
  function applySlidesPerView(n) {
    slidesPerView = n;
    track.parentElement.style.setProperty('--slides-per-view', String(n));
  }

  function updateSlidesPerView() {
    const newSPV = window.innerWidth <= 768 ? 1 : 2;
    // se mudou, atualiza o CSS e ajusta index para não ultrapassar o máximo
    if (newSPV !== slidesPerView) {
      applySlidesPerView(newSPV);
    } else {
      // garante que a variável exista mesmo sem mudança
      applySlidesPerView(newSPV);
    }
    const maxIndex = Math.max(0, slides.length - slidesPerView);
    if (index > maxIndex) index = maxIndex;
    updateCarousel(); 
  }

  function updateCarousel() {
    // cada slide ocupa (100 / slidesPerView) % do track
    const stepPercent = 100 / slidesPerView;
    // transform em porcentagem garante que o deslocamento seja exatamente por slides
    track.style.transform = `translateX(-${index * stepPercent}%)`;
  }

  nextBtn.addEventListener('click', () => {
    const maxIndex = Math.max(0, slides.length - slidesPerView);
    // avançar 1 slide por clique; se quiser pular 2 por vez no desktop, mudar abaixo
    index = Math.min(index + 1, maxIndex);
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    index = Math.max(0, index - 1);
    updateCarousel();
  });

  // atualização responsiva (debounce simples)
  let rTimer;
  window.addEventListener('resize', () => {
    clearTimeout(rTimer);
    rTimer = setTimeout(updateSlidesPerView, 80);
  });

  // aguarda imagens carregarem para evitar cálculos errados
  window.addEventListener('load', updateSlidesPerView);
  // inicializa imediatamente também
  updateSlidesPerView();

  // Opcional: suporte a teclado (setas)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.key === 'ArrowLeft') prevBtn.click();
  });
})();