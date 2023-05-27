const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
      toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// código para manejar el nombre del usuario
const usuario = document.querySelector('#usuario');
const nombreUsuario = localStorage.getItem('nombreUsuario');

if (nombreUsuario) {
  usuario.textContent = nombreUsuario;
} else {
  usuario.textContent = 'sin identificar';
}

usuario.addEventListener('input', () => {
  localStorage.setItem('nombreUsuario', usuario.value);
});