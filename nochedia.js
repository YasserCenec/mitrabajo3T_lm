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

// Código para manejar el nombre de usuario
const usuario = document.querySelector('#nombreUsuario');
const nombreUsuarioContainer = document.querySelector('#nombreUsuarioContainer');
let nombreUsuario = sessionStorage.getItem('nombreUsuario');

if (nombreUsuario) {
  // Aplicar el nombre de usuario guardado al cargar la página
  nombreUsuarioContainer.innerHTML = `Usuario: <span>${nombreUsuario}</span>`;
  usuario.value = nombreUsuario;
} else {
  nombreUsuarioContainer.innerHTML = 'Usuario: sin identificar';
}

usuario.addEventListener('input', () => {
  // Actualizar el nombre de usuario en sessionStorage al escribir en el campo
  nombreUsuarioContainer.innerHTML = `Usuario: <span>${usuario.value}</span>`;
  sessionStorage.setItem('nombreUsuario', usuario.value);
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

  // Guardar los ajustes en el almacenamiento local
  const ajustes = {
    colorTema: colorTema,
    tamanoTexto: tamanoTexto,
    tipoLetra: tipoLetra
  };
  localStorage.setItem('ajustes', JSON.stringify(ajustes));
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
const ajustesForm = document.querySelector('#ajustesForm');
ajustesForm.addEventListener('change', aplicarAjustes);


  // Guardar los ajustes en el local storage
  const ajustes = {
    colorTema: colorTemaInput.value,
    tamanoTexto: tamanoTextoInput.value,
    tipoLetra: tipoLetraSelect.value
  };
  localStorage.setItem('ajustes', JSON.stringify(ajustes));

// Leer y modificar contenidos de la página web
document.addEventListener('DOMContentLoaded', function() {
  // Leer el contenido de un elemento
  const contenido = document.getElementById('nombreElemento').innerHTML;
  console.log('Contenido actual:', contenido);

  // Modificar el contenido de un elemento
  document.getElementById('nombreElemento').innerHTML = 'Nuevo contenido';
  console.log('Contenido modificado:', document.getElementById('nombreElemento').innerHTML);
});