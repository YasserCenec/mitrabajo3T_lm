// Código para cambiar el tema
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#temaButton');

const enableDarkMode = () => {
  document.body.classList.add('oscuro');
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  document.body.classList.remove('oscuro');
  localStorage.setItem('darkMode', 'disabled');
};

if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// Obtiene el modal, el botón que abre el modal y el botón que cierra el modal
const modal = document.querySelector('.modal');
const trigger = document.querySelector('#openModal');
const closeButton = document.querySelector('.cerrar-button');

// Función que muestra el modal
function toggleModal() {
  modal.style.display = 'block';
}

// Función que cierra el modal
function closeModal() {
  modal.style.display = 'none';
}

// Para abrir el modal
trigger.addEventListener('click', toggleModal);

// Para cerrar el modal
closeButton.addEventListener('click', closeModal);

// Para cerrar el modal al hacer clic fuera del contenido
window.addEventListener('click', function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

// Código para manejar el nombre del usuario
const usuario = document.querySelector('#nombreUsuario');
const nombreUsuarioContainer = document.querySelector('#nombreUsuarioContainer');
let nombreUsuario = sessionStorage.getItem('nombreUsuario');

if (nombreUsuario) {
  nombreUsuarioContainer.innerHTML = `Usuario: <span>${nombreUsuario}</span>`;
  usuario.value = nombreUsuario;
} else {
  nombreUsuarioContainer.innerHTML = 'Usuario: sin identificar';
}

usuario.addEventListener('input', () => {
  nombreUsuarioContainer.innerHTML = `Usuario: <span>${usuario.value}</span>`;
});

// Capturar el evento de envío del formulario
const ajustesForm = document.querySelector('#ajustesForm');
ajustesForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener el valor del nombre de usuario del campo de entrada
  const nuevoNombreUsuario = usuario.value.trim();

  if (nuevoNombreUsuario !== '') {
    // Actualizar el nombre de usuario en todas las páginas
    nombreUsuario = nuevoNombreUsuario;
    sessionStorage.setItem('nombreUsuario', nombreUsuario);

    // Limpiar el campo de entrada
    usuario.value = '';
  }
});

// Limpiar sessionStorage cuando la página está a punto de ser recargada o cerrada
window.addEventListener('beforeunload', function () {
  sessionStorage.clear();
});