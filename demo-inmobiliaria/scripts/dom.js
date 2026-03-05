// Función para cargar HTML desde un archivo
export async function loadHTML(path) {
  const res = await fetch(path);
  return res.text();
}

// Seleccionar un elemento con querySelector
export function qs(selector, scope = document) {
  return scope.querySelector(selector);
}

// Seleccionar todos los elementos con querySelectorAll
export function qsa(selector, scope = document) {
  return [...scope.querySelectorAll(selector)];
}

// Función para mostrar el número de resultados en el contador
export function updateCount(count) {
  qs('#count').textContent = count;
}

// Función para renderizar el año en el footer
export function setYear() {
  qs('#year').textContent = new Date().getFullYear();
}
