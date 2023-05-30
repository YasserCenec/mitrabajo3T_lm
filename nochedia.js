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

// Obtener los elementos del formulario de ajustes
const colorTemaInput = document.getElementById('colorTema');
const tamanoTextoInput = document.getElementById('tamanoTexto');
const tipoLetraSelect = document.getElementById('tipoLetra');

// Función para aplicar los estilos según los ajustes guardados
function aplicarAjustes() {
  // Obtener los valores de los ajustes
  const colorTema = colorTemaInput.value;
  const tamanoTexto = tamanoTextoInput.value + 'px';
  const tipoLetra = tipoLetraSelect.value;

  // Aplicar los estilos en el body y otros elementos relevantes
  document.body.style.color = colorTema;
  document.body.style.fontSize = tamanoTexto;
  document.body.style.fontFamily = tipoLetra;
  // ...
}

// Obtener los ajustes guardados (si existen) y aplicarlos
const ajustesGuardados = JSON.parse(localStorage.getItem('ajustes'));
if (ajustesGuardados) {
  colorTemaInput.value = ajustesGuardados.colorTema;
  tamanoTextoInput.value = ajustesGuardados.tamanoTexto;
  tipoLetraSelect.value = ajustesGuardados.tipoLetra;
  aplicarAjustes();
}

// Manejar el evento de cambio en los ajustes
ajustesForm.addEventListener('change', function(event) {
  aplicarAjustes();

  // Guardar los ajustes en el local storage
  const ajustes = {
    colorTema: colorTemaInput.value,
    tamanoTexto: tamanoTextoInput.value,
    tipoLetra: tipoLetraSelect.value
  };
  localStorage.setItem('ajustes', JSON.stringify(ajustes));
});

// Leer y modificar contenidos de la página web
document.addEventListener('DOMContentLoaded', function() {
  // Leer el contenido de un elemento
  const contenido = document.getElementById('nombreElemento').innerHTML;
  console.log('Contenido actual:', contenido);

  // Modificar el contenido de un elemento
  document.getElementById('nombreElemento').innerHTML = 'Nuevo contenido';
  console.log('Contenido modificado:', document.getElementById('nombreElemento').innerHTML);
  
  // Nuevas funcionalidades: leer y modificar el título de la página
  console.log('Título actual de la página:', document.title);
  document.title = 'Nuevo Título';
  console.log('Título modificado de la página:', document.title);
  
  const parrafo = document.querySelector('p'); // Obtén el primer párrafo en la página
  if (parrafo) { // Verifica si el párrafo existe
    console.log('Contenido del párrafo:', parrafo.textContent);
    parrafo.textContent = 'Este es un nuevo párrafo.';
    console.log('Contenido modificado del párrafo:', parrafo.textContent);
  } else {
    console.log('No se encontró ningún párrafo en la página.');
  }
});