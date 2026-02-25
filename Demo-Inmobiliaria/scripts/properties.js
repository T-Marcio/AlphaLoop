import { qs } from './dom.js';
import { state } from './state.js';

export async function loadProperties() {
  const response = await fetch('data/properties.json');
  const data = await response.json();

  state.properties = data;
  state.filteredProperties = data;

  console.log('PROPIEDADES CARGADAS:', data.length);
  return data;
}

export function renderProperties(container, properties) {
  console.log('CONTAINER:', container);
  console.log('Renderizando propiedades:', properties);
  container.innerHTML = ''; // Limpiamos el contenedor antes de renderizar

  properties.forEach(prop => {
    const card = document.createElement('article');
    card.classList.add('property-card');

    if (prop.featured) {
      card.classList.add('featured');
    }

    card.innerHTML = `
      <img src="${prop.image}" alt="${prop.title}" class="property-card__image">
      <div class="property-card__body">
        <h3 class="property-card__title">${prop.title}</h3>
        <p class="property-card__meta">${prop.city} - ${prop.type}</p>
        <div class="property-card__info">
          <span class="property-card__price">ARS ${prop.price.toLocaleString()}</span>
          <span class="property-card__beds">${prop.beds} dormitorios</span>
        </div>
        <div class="property-card__actions">
          <button class="btn btn--primary">Ver</button>
          <button class="btn btn--secondary">Contactar</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}
