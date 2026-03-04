import './styles/tailwind.css'
//Carga header.html en cada página
fetch(`${import.meta.env.BASE_URL}header.html`)
  .then(response => response.text())
  .then(html => {
    document.body.insertAdjacentHTML('beforeend', html);
  
    //activa lógica del menú móvil (sin esperar DOMContentLoaded ya que insertamos tras cargar)
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconClose = document.getElementById('icon-close');
    const iconOpen = menuBtn ? menuBtn.querySelector('svg:not(.hidden)') : null;

    if(menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        // Si el menú está oculto, se muestra con animación
        if(isHidden){
          mobileMenu.classList.remove('hidden');
          if(iconOpen) iconOpen.classList.add('hidden');
          if(iconClose) iconClose.classList.remove('hidden');
        } else {
          // Si el menú está visible, se oculta con animación
          mobileMenu.classList.add('hidden');
          if(iconOpen) iconOpen.classList.remove('hidden');
          if(iconClose) iconClose.classList.add('hidden');
        }
      });
    }

    //cerrar menú al hacer click en un enlace
    const menuLinks = document.querySelectorAll('#mobile-menu a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        if(iconOpen) iconOpen.classList.remove('hidden');
        if(iconClose) iconClose.classList.add('hidden');
      });
    });
  })
.catch(error => {
  console.error('Error al cargar el header:', error);
});
/*
//Carga imágenes de assets (si es necesario para alguna lógica adicional)
const articles =import.meta.glob('./assets/articles/*.{jpg,png,svg}', { eager: true });
const icons = import.meta.glob('./assets/icons/*.{svg,png}', { eager: true });
const images = import.meta.glob('./assets/images/*.{jpg,png}', { eager: true });
const portfolio = import.meta.glob('./assets/portfolio/*.{jpg,png}', { eager: true });
//convierte a un array de objetos con nombre y URL
const articleImages = Object.values(articles).map(img => img.default);
const iconImages = Object.values(icons).map(img => img.default);
const imageImages = Object.values(images).map(img => img.default);
const portfolioImages = Object.values(portfolio).map(img => img.default);
//renderiza artículos dinámicamente en el DOM
const articlesContainer = document.querySelector('#articles-container');
const iconsContainer = document.querySelector('#icons-container');
const imagesContainer = document.querySelector('#images-container');
const portfolioContainer = document.querySelector('#portfolio-container');

articleImages.forEach((src) => {
  const img = document.createElement('img')
  img.src = src
  img.className = "rounded shadow-lg w-48 m-2"
  articlesContainer.appendChild(img)
})

iconImages.forEach((src) => {
  const img = document.createElement('img')
  img.src = src
  img.className = "rounded shadow-lg w-48 m-2"
  iconsContainer.appendChild(img)
})

imageImages.forEach((src) => {
  const img = document.createElement('img')
  img.src = src
  img.className = "rounded shadow-lg w-48 m-2"
  imagesContainer.appendChild(img)
})

portfolioImages.forEach((src) => {
  const img = document.createElement('img')
  img.src = src
  img.className = "rounded shadow-lg w-48 m-2"
  portfolioContainer.appendChild(img)
})
*/

//Carousel básico: alterna imágenes cada 3 segundos
document.querySelectorAll('.carousel').forEach(carousel => {
  const images = carousel.querySelectorAll('img');
  let index = 0;

  setInterval(() => {
    images.forEach((img, i) => {
      img.classList.toggle('hidden', i !== index);
    });
    index = (index + 1) % images.length;
  }, 4000);
});

//carga footer.html en cada página
fetch('./footer.html')
  .then(response => response.text())
  .then(html => {
    document.body.insertAdjacentHTML('beforeend', html);
  })
  .catch(error => {
    console.error('Error al cargar el footer:', error);
  });

