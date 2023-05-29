// Obtiene el elemento con el ID 'tablero' del DOM
const tablero = document.getElementById('tablero');

// Crea un bucle que itera 9 veces (para las 9 celdas del tablero)
for (let i = 0; i < 9; i++) {
  // Crea un nuevo elemento div y lo guarda en la variable 'celda'
  const celda = document.createElement('div');
  // Añade la clase 'celda' al nuevo elemento
  celda.classList.add('celda');
  // Asigna un ID único a cada celda
  celda.id = `celda-${i}`;
  // Añade la celda como hijo del elemento 'tablero'
  tablero.appendChild(celda);
}

// Función que se ejecuta cuando el ratón entra en una celda
function handleMouseEnter(event) {
  // Cambia el color de fondo de la celda
  event.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
}

// Función que se ejecuta cuando el ratón sale de una celda
function handleMouseLeave(event) {
  // Restablece el color de fondo de la celda
  event.target.style.backgroundColor = '';
}

// Obtiene todos los elementos con la clase 'celda'
const celdas = document.getElementsByClassName('celda');

// Añade eventos "mouseenter" y "mouseleave" a cada celda
for (let i = 0; i < celdas.length; i++) {
  celdas[i].addEventListener('mouseenter', handleMouseEnter);
  celdas[i].addEventListener('mouseleave', handleMouseLeave);
}

// Define el jugador actual
let jugadorActual = '✘';

// Función que se ejecuta al hacer clic en una celda
function handleClick(event) {
  if (event.target.textContent === '') {
    // Añade el símbolo del jugador actual a la celda
    event.target.textContent = jugadorActual;
    event.target.style.color = 'white';
    // Cambia el jugador actual al otro jugador
    jugadorActual = jugadorActual === '✘' ? '〇' : '✘';
    // Verifica si hay un ganador
    verificarGanador();
  }
}

// Añade eventos 'click' a cada celda
for (let i = 0; i < celdas.length; i++) {
  celdas[i].addEventListener('click', handleClick);
}

// Función que verifica si hay un ganador
function verificarGanador() {
  // Obtiene los valores de todas las celdas
  const valoresCeldas = Array.from(celdas).map(celda => celda.textContent);
  // Define las condiciones ganadoras
  const condicionesGanadoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
    [0, 4, 8], [2, 4, 6] // Diagonales
  ];

  // Verifica si alguna condición ganadora se cumple
  for (const condicion of condicionesGanadoras) {
    const [a, b, c] = condicion;
    if (valoresCeldas[a] && valoresCeldas[a] === valoresCeldas[b] && valoresCeldas[a] === valoresCeldas[c]) {
      alert(`¡El jugador ${valoresCeldas[a]} ganó la partida!`);
      toggleModal(); // Abre el modal al haber un ganador
      break;
    }
  }

  document.getElementById('mas-informacion').addEventListener('click', function (event) {
    event.preventDefault();
    alert('Yasser, 1º DAM\nTA-TE-TI');
  });
}