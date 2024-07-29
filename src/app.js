const menu_history = document.querySelector('#menu-history');
const menu_toggle = document.querySelector('#menu-toggle');

menu_history.addEventListener('click', () => {
  menu_toggle.classList.toggle('hidden');
})

// saat bagian manapun din windows di klik menu item akan hilnag


window.addEventListener('click', (e) => {
  if (!menu_toggle.contains(e.target) && !menu_history.contains(e.target)) {
    menu_toggle.classList.add('hidden');
  }
})