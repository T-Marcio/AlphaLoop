export function initFilters(root, onChange) {
  const type = root.querySelector('#filterType');
  const beds = root.querySelector('#filterBeds');
  const price = root.querySelector('#filterPrice');
  const apply = root.querySelector('#applyFilters');
  const clear = root.querySelector('#clearFilters');

  // Aplicar filtros
  apply.addEventListener('click', () => {
    onChange({
      type: type.value,
      beds: beds.value,
      maxPrice: Number(price.value) || Infinity
    });
  });

  // Limpiar filtros
  clear.addEventListener('click', () => {
    type.value = '';
    beds.value = '';
    price.value = '';
    onChange({ type:'', beds:'', maxPrice:Infinity });
  });
}
