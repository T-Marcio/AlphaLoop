// main.js
import { loadHTML, qs } from './dom.js';
import { state } from './state.js';
import { initNavbar } from './navbar.js';
import { initFilters } from './filters.js';
import { loadProperties, renderProperties } from './properties.js';
import { initCarousel } from './carousel.js';
import { initFooter } from './footer.js';

// Carga el contenido del carrusel
async function loadCarousel() {
  const res = await fetch('data/carousel.json');
  return await res.json();
}

function applyFilters(filters) {
  state.filters = filters;

  state.filteredProperties = state.properties.filter(p => {
    if (filters.type && p.type !== filters.type) return false;
    if (filters.beds && p.beds < filters.beds) return false;
    if (p.price > filters.maxPrice) return false;
    return true;
  });

  renderProperties(qs('#cardsGrid'), state.filteredProperties);
}

async function init() {
  const app = qs('#app');

  // 1️ Cargamos el HTML primero
  app.innerHTML = `
    ${await loadHTML('components/navbar.html')}
    ${await loadHTML('components/carousel.html')}
    ${await loadHTML('components/filters.html')}
    ${await loadHTML('components/services.html')}
    ${await loadHTML('components/footer.html')}
  `;

  // 2️ Cargamos los datos
  await loadProperties();
  const carouselData = await loadCarousel();

  // 3️ Inicializamos componentes
  initNavbar(app);
  initFilters(app, applyFilters);
  initCarousel(app, carouselData);
  initFooter();

  // 4️ Render final de propiedades
  console.log("ANTES DEL RENDER");
  renderProperties(qs('#cardsGrid'), state.properties);
  console.log("DESPUÉS DEL RENDER");
}

init();

