export function initNavbar(root) {
  const btn = root.querySelector('#menuBtn');
  const nav = root.querySelector('nav');

  // Toggle para abrir y cerrar el menú en dispositivos pequeños
  btn.addEventListener('click', () => {
    nav.classList.toggle('hidden');
  });
}

