export function initNavbar(root) {
  const btn = root.querySelector('#menuBtn');
  const nav = root.querySelector('nav');

  // Toggle para abrir y cerrar el menú en dispositivos pequeños
  btn.addEventListener('click', () => {
    nav.classList.toggle('hidden');
  });
}

document.getElementById("menuBtn").addEventListener("click", function() {
  document.getElementById("sidebar").classList.toggle("active");
});
