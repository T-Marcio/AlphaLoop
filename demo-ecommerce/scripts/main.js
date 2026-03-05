const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const toggleBtn = document.getElementById('toggle-cart');
const carrito = document.getElementById('carrito');
let total = 0;
let count = 0; // contador de productos

if (toggleBtn && carrito) {
  toggleBtn.addEventListener('click', () => {
    carrito.classList.toggle('active');
  });
}

// Búsqueda y filtro
const searchInput = document.getElementById('search');
const filterSelect = document.getElementById('filter');
const products = document.querySelectorAll('.card');

function filterProducts() {
  if (!searchInput || !filterSelect) return;
  const searchText = searchInput.value.toLowerCase();
  const filterValue = filterSelect.value;

  products.forEach(product => {
    const nameEl = product.querySelector('h3');
    const name = nameEl ? nameEl.textContent.toLowerCase() : '';
    const category = product.getAttribute('data-category');

    const matchesSearch = name.includes(searchText);
    const matchesFilter = filterValue === 'all' || category === filterValue;

    product.style.display = (matchesSearch && matchesFilter) ? 'block' : 'none';
  });
}

if (searchInput && filterSelect) {
  searchInput.addEventListener('input', filterProducts);
  filterSelect.addEventListener('change', filterProducts);
}

// Creamos un elemento en el header para mostrar el contador
const header = document.querySelector('.carrito');
if (header) {
  const counterDisplay = document.createElement('span');
  counterDisplay.id = 'cart-counter';
  counterDisplay.style.marginLeft = '1rem';
  counterDisplay.style.fontWeight = 'bold';
  counterDisplay.textContent = ` (${count})`;
  header.appendChild(counterDisplay);
}

// Lógica del carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    if (!cartItems || !cartTotal) {
      console.warn('Elementos del carrito no encontrados en el DOM');
      return;
    }

    const card = button.closest('.card');
    const nameEl = card ? card.querySelector('h3') : null;
    const priceEl = card ? card.querySelector('p') : null;
    const productName = nameEl ? nameEl.textContent : 'Producto';
    const productPrice = priceEl ? parseInt(priceEl.textContent.replace('$','').replace('.','')) : 0;

    // Agregar producto a la lista
    const li = document.createElement('li');
    li.textContent = `${productName} - $${productPrice}`;
    cartItems.appendChild(li);

    // Actualizar total y contador
    total += productPrice;
    count++;
    cartTotal.textContent = `Total: $${total}`;
    const counter = document.getElementById('cart-counter');
    if (counter) counter.textContent = ` (${count})`;
  });
});
