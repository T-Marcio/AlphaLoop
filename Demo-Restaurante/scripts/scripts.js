// Simulación de carousel automático
const carousel = document.getElementById('carousel');
let scrollAmount = 0;

function autoScroll() {
  scrollAmount += 250;
  if (scrollAmount >= carousel.scrollWidth) {
    scrollAmount = 0;
  }
  carousel.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

setInterval(autoScroll, 3000);

// Simulación de envío de reservas
document.querySelector('.form-reserva')?.addEventListener('submit', e => {
  e.preventDefault();
  alert('Reserva enviada (simulación). ¡Gracias por elegirnos!');
});