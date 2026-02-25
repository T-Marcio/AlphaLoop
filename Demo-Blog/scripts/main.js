// Simulación: mensaje al hacer clic en "Leer más"
document.querySelectorAll('.leer-mas').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    alert('Este es un demo. El artículo completo no está disponible.');
  });
});