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
  const cartasAleatorias = cartas.sort(() => Math.random() - 0.5).slice(0, 9);

  const cartasHTML = cartasAleatorias.map((carta, index) => {
    return (
      <div class="carta" key={index}>
        <h2>{carta.titulo}</h2>
      </div>
    );
  });

  document.querySelector(".cartas").innerHTML = cartasHTML.join("");
};

