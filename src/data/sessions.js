// Secuencia didáctica (7 sesiones) — pensamiento sistémico aplicado al sistema circulatorio.
// Lineamientos (Dr. Eliécer Pineda Ballesteros, UDES):
//   1 Componentes, 2 Causalidad, 3 Escalas, 4 Representación,
//   5 Conservación/Balance, 6 Propósito, 7 Estabilidad/Resiliencia.

const SESSIONS = [
  {
    number: 1,
    title: 'Introducción al concepto de sistema',
    objective: 'Aplicación del Lineamiento 1: Identificar los componentes del objeto de estudio.',
    lineamientos: [1],
    sims: ['introduccion'],
    activities: ['video', 'foro'],
  },
  {
    number: 2,
    title: 'Apropiación y Causalidad',
    objective: 'Aplicación del Lineamiento 2: Establecer mecanismos de causa y efecto.',
    lineamientos: [2],
    sims: ['apropiacion'],
    activities: ['simulacion', 'cuestionario'],
  },
  {
    number: 3,
    title: 'Representación del Sistema',
    objective: 'Aplicación del Lineamiento 3: Representar el objeto de estudio mediante la simulación del corazón.',
    lineamientos: [3],
    sims: ['corazon'],
    activities: ['simulacion', 'sintesis'],
  },
  {
    number: 4,
    title: 'Escalas, Proporciones y Cantidades',
    objective: 'Aplicación del Lineamiento 4: Establecer escalas, proporciones y cantidades en la composición de la sangre.',
    lineamientos: [4],
    sims: ['sangre'],
    activities: ['calculo', 'diagrama'],
  },
  {
    number: 5,
    title: 'Conservación de la Materia',
    objective: 'Aplicación del Lineamiento 5: Reconocer la ley de la conservación de la materia a través del intercambio gaseoso en los pulmones.',
    lineamientos: [5],
    sims: ['pulmones'],
    activities: ['simulacion', 'informe'],
  },
  {
    number: 6,
    title: 'Estructura y Propósito',
    objective: 'Aplicación del Lineamiento 6: Entender la estructura y el propósito del objeto de estudio, enfocándose en el cerebro como centro de control.',
    lineamientos: [6],
    sims: ['cerebro'],
    activities: ['simulacion', 'analisis'],
  },
  {
    number: 7,
    title: 'Estabilidad y Cambio',
    objective: 'Aplicación del Lineamiento 7: Comprender la estabilidad y el cambio en el objeto de estudio mediante el sistema circulatorio completo (homeostasis).',
    lineamientos: [7],
    sims: ['sistema-circulatorio'],
    activities: ['postest'],
  },
];

module.exports = SESSIONS;
