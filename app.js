document.addEventListener('DOMContentLoaded', function () {
  // Para que se cierre el menú desplegado cuando presione un link
  // Selecciona el checkbox y los enlaces del menú
  const menuCheckbox = document.getElementById('check');
  const menuLinks = document.querySelectorAll('.nav-list a');

  // Función para cerrar el menú
  function closeMenu() {
    menuCheckbox.checked = false;
  }

  // Añade un listener a cada enlace del menú
  menuLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  //Modal
  const verMasBtns = document.querySelectorAll('.ver-mas');
  const modals = document.querySelectorAll('.modal');
  const closeBtns = document.querySelectorAll('.close');

  verMasBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // console.log('Botón Ver más presionado');
      const proyectoId = btn.getAttribute('data-proyecto');
      const modal = document.getElementById(`modal-${proyectoId}`);
      if (modal) {
        modal.classList.add('show');
      }
    });
  });

  closeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      if (modal) {
        modal.classList.remove('show');
      }
    });
  });

  window.addEventListener('click', (e) => {
    modals.forEach((modal) => {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });
  });
});
