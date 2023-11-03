const cartas = [
  {
    titulo: "En el 2024, el Día del Amigo será aún más especial con un nuevo evento sorpresa",
  },
  {
    titulo: "En el 2024, la Fiesta de fin de año será inolvidable con una nueva temática",
  },
  {
    titulo: "En el 2024, las Pascuas serán llenas de alegría con un nuevo juego para los niños",
  },
  {
    titulo: "En el 2024, los almuerzos de trabajo serán más divertidos con un nuevo menú",
  },
  {
    titulo: "En el 2024, las charlas de diseño serán más inspiradoras con un nuevo invitado",
  },
  {
    titulo: "En el 2024, el Día del trabajador será un día de descanso merecido con un nuevo regalo",
  },
  {
    titulo: "En el 2024, las charlas sobre mobbing serán más efectivas con un nuevo enfoque",
  },
  {
    titulo: "En el 2024, las charlas para líderes de Prosumia serán más enriquecedoras con un nuevo formato",
  },
];

const generarCartas = () => {
  const cartaAleatoria = cartas[Math.floor(Math.random() * cartas.length)];

  const cartasHTML = [
    <div class="carta" key={0}>
      <h2>{cartaAleatoria.titulo}</h2>
    </div>,
  ];

  const cartasDiv = document.querySelector(".cartas");

  // Obtenemos el ancho de la ventana del navegador
  const anchoVentana = window.innerWidth;

  // Calculamos el número de filas que se necesitan
  const numeroFilas = Math.ceil(cartasHTML.length / anchoVentana / 2);

  // Generamos el código HTML para las filas
  const filasHTML = [];
  for (let i = 0; i < numeroFilas; i++) {
    filasHTML.push(
      `<div class="fila">${cartasHTML.slice(i * 2, (i + 1) * 2).join("")}</div>`
    );
  }

  // Asignamos el código HTML a la división de las cartas
  cartasDiv.innerHTML = filasHTML.join("");
};



