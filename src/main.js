import './styles/tailwind.css'

//funcion reutilizable para cargar componentes
async function loadComponent(id, file) {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}${file}`);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
  } catch (error) {
    console.error(`Error al cargar ${file}:`, error);
  }
}

//cargar header y footer
loadComponent("header", "header.html");
loadComponent("footer", "footer.html");

//lógica despues de cargar el header
document.addEventListener('DOMContentLoaded', () => {

  //menú móvil
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconClose = menuBtn ? menuBtn.querySelector('icon-close') : null;
  const iconOpen = menuBtn ? menuBtn.querySelector('svg:not(.hidden)') : null;

  if(menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if(isHidden){
        mobileMenu.classList.remove('hidden');
        if(iconOpen) iconOpen.classList.add('hidden');
        if(iconClose) iconClose.classList.remove('hidden');
      }
      else {
        mobileMenu.classList.add('hidden');
        if(iconOpen) iconOpen.classList.remove('hidden');
        if(iconClose) iconClose.classList.add('hidden');
      }
    });
  }
  
  //cerrar menú al hacer click en un enlace
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      if(iconOpen) iconOpen.classList.remove('hidden');
      if(iconClose) iconClose.classList.add('hidden');
    });
  });

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
});

const demos = [
  {name: "demo-blog", link: "https://t-marcio.github.io/AlphaLoop/demo-blog/"},
  {name: "demo-ecommerce", link: "https://t-marcio.github.io/AlphaLoop/demo-ecommerce/"},
  {name: "demo-inmobiliaria", link: "https://t-marcio.github.io/AlphaLoop/demo-inmobiliaria/"},
  {name: "demo-landing", link: "https://t-marcio.github.io/AlphaLoop/demo-landing/"},
  {name: "demo-restaurante", link: "https://t-marcio.github.io/AlphaLoop/demo-restaurante/"}
]

const buttons = document.querySelectorAll(".btn-demo");

buttons.forEach(button => {
  const name = button.dataset.demo;
  const demo = demos.find(d => d.name === name);

  if (demo) {
    button.href = demo.link;
  }
});

//marcar enlace activo del menú
const currentPath = window.location.pathname.split('/').pop();
document.querySelectorAll('nav a').forEach(link => {
  const linkPath = link.getAttribute('href');
  if(linkPath === currentPath) {
    link.classList.add('text-teal-600', 'font-semibold');
  }
});
