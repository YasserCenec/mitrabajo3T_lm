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

// Obtener el nombre de usuario de la cookie si no se encuentra en sessionStorage
if (!nombreUsuario) {
  nombreUsuario = getCookie('nombreUsuario');
  if (nombreUsuario) {
    nombreUsuarioContainer.innerHTML = `Usuario: <span>${nombreUsuario}</span>`;
    usuario.value = nombreUsuario;
    sessionStorage.setItem('nombreUsuario', nombreUsuario);
  }
}

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
    setCookie('nombreUsuario', nombreUsuario, 365);

    // Limpiar el campo de entrada
    usuario.value = '';
  }
});

// Funciones para manejar las cookies
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }
  return '';
}