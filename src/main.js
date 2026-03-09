import './styles/tailwind.css'

//funcion reutilizable para cargar componentes
async function loadComponent(id, file) {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}${file}`);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;

    // Ejecutar lógica del menú aquí (después de cargar el header)
    if (id === "header") {
      initMobileMenu();
    }
  } catch (error) {
    console.error(`Error al cargar ${file}:`, error);
  }
}

function initMobileMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!menuBtn || !mobileMenu) return;

  const iconClose = menuBtn.querySelector('.icon-close');
  const iconOpen = menuBtn.querySelector('.icon-open');

  menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden', !isHidden);
    iconOpen.classList.toggle('hidden', !isHidden); //oculta icono hamburguesa cuando el menú esta abierto
    iconClose.classList.toggle('hidden', isHidden); //muestra icono X cuando el menú esta abierto
  });

  // Cerrar menú al hacer clic en enlaces
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden'); //cierra el menu
      iconOpen.classList.remove('hidden'); //muestra icono hamburguesa
      iconClose.classList.add('hidden'); //oculta icono X
    });
  });
}

// Cargar componentes y luego inicializar menú
loadComponent("header", "header.html");
loadComponent("footer", "footer.html");

//Carousel básico: alterna imágenes cada 4 segundos
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

// Configurar URLs de demos
const demos = {
  "demo-blog":`${import.meta.env.BASE_URL}demos/demo-blog/`,
  "demo-ecommerce": `${import.meta.env.BASE_URL}demos/demo-ecommerce/`,
  "demo-inmobiliaria": `${import.meta.env.BASE_URL}demos/demo-inmobiliaria/`,
  "demo-landing": `${import.meta.env.BASE_URL}demos/demo-landing/`,
  "demo-restaurante": `${import.meta.env.BASE_URL}demos/demo-restaurante/`
};

// Agregar eventos a los botones existentes
document.querySelectorAll('.btn-demo').forEach(button => {
  const demoKey = button.dataset.demo.replace('demo-', '');
  button.href = demos[demoKey];
});

//marcar enlace activo del menú
const currentPath = window.location.pathname.split('/').pop();
document.querySelectorAll('nav a').forEach(link => {
  const linkPath = link.getAttribute('href');
  if(linkPath === currentPath) {
    link.classList.add('text-teal-600', 'font-semibold');
  }
});