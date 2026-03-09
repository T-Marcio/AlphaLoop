import { qs } from './dom.js';

export function initFooter() {
  const yearEl = qs('#year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
