import './styles/tailwind.css'
import { initMobileMenu } from './mobileMenu.js';

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

// Mostrar mensaje de éxito después de enviar el formulario
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('success') === 'true') {
  document.getElementById('mensaje').textContent = 'Hola, ${nombre}! Tu consulta ha sido enviada con éxito. ¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.';
  document.getElementById('mensaje').style.display = 'block';
}