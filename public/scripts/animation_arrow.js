document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.dropdown-toggle');
  const submenu = document.getElementById('proyectos-list');

  if (toggle && submenu) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      submenu.hidden = expanded;
    });

    toggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle.click();
      }
    });
  }
});
