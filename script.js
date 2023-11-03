const cartas = [
  {
    titulo: "En el 2024, el Día del Amigo será aún más especial",
  },
  {
    titulo: "En el 2024, la Fiesta de fin de año será inolvidable",
  },
  {
    titulo: "En el 2024, las Pascuas serán llenas de alegría",
  },
  {
    titulo: "En el 2024, los almuerzos de trabajo serán más divertidos",
  },
  {
    titulo: "En el 2024, las charlas de diseño serán más inspiradoras",
  },
  {
    titulo: "En el 2024, el Día del trabajador será un día de descanso merecido",
  },
  {
    titulo: "En el 2024, las charlas sobre mobbing serán más efectivas",
  },
  {
    titulo: "En el 2024, las charlas para líderes de Prosumia serán más enriquecedoras",
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

document.querySelector("#generar").addEventListener("click", generarCartas);
