//Carga header.html en cada página
fetch('/src/components/header.html')
  .then(response => response.text())
  .then(html => {
    document.body.insertAdjacentHTML('afterbegin', html);
  
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
fetch('/src/components/footer.html')
  .then(response => response.text())
  .then(html => {
    document.body.insertAdjacentHTML('beforeend', html);
  })
  .catch(error => {
    console.error('Error al cargar el footer:', error);
  });