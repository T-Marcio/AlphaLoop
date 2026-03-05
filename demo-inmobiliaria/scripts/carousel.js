// Inicialización del carrusel con Swiper
const slidesUrl = 'data/carousel.json';

async function fetchSlides() {
  try {
    const res = await fetch(slidesUrl);
    if (!res.ok) throw new Error('No se pudo cargar carousel.json');
    return await res.json();
  }
  catch (err) {
    console.error(err);
    return [];
  }
}

function createSlideHtml(item){
  return `
    <div class="swiper-slide" role="group" aria-label="${item.title}">
      <img src="${item.img}" alt="${item.title}" loading="lazy">
      <div class="slide-caption">
        <div class="slide-title">${item.title}</div>
        <div class="slide-sub">${item.subtitle || ''}</div>
      </div>
    </div>
  `;
}

export function initCarousel(root, slides) {
  if (!slides || !slides.length) return;
  
  const slide = slides[0]; // Solo mostramos el primer slide por ahora
  const carousel = root.querySelector('.carousel');
  
  const carouselHTML = `
    <div class="carousel__content">
      <h2 class="carousel__title">${slide.title}</h2>
      <p class="carousel__subtitle">${slide.subtitle}</p>
      <div class="carousel__actions">
        <a href="${slide.ctaPrimary.target}" class="btn btn--primary">${slide.ctaPrimary.label}</a>
        <a href="${slide.ctaSecondary.target}" class="btn btn--secondary">${slide.ctaSecondary.label}</a>
        </div>
      </div>
      <div class="carousel__media">
        <img src="${slide.image}" alt="${slide.title}">
      </div>
 `;

  carousel.innerHTML = carouselHTML;
}