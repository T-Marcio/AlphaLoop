export function initMobileMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!menuBtn || !mobileMenu) {
    console.error('Elementos del menú no encontrados');
    return;
  }

  const iconOpen = menuBtn.querySelector('.icon-open');
  const iconClose = menuBtn.querySelector('.icon-close');

  menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('translate-x-0');

    mobileMenu.classList.toggle('translate-x-0', !isOpen);
    mobileMenu.classList.toggle('translate-x-full', isOpen);

    iconOpen.classList.toggle('hidden', !isOpen);
    iconClose.classList.toggle('hidden', isOpen);
  });

  // cerrar al hacer click en links
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-0');
      mobileMenu.classList.add('translate-x-full');

      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
    });
  });
}