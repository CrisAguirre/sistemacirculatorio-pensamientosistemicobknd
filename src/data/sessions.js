// Secuencia didáctica (7 sesiones) — pensamiento sistémico aplicado al sistema circulatorio.
// Lineamientos (Dr. Eliécer Pineda Ballesteros, UDES):
//   1 Componentes, 2 Causalidad, 3 Escalas, 4 Representación,
//   5 Conservación/Balance, 6 Propósito, 7 Estabilidad/Resiliencia.

const SESSIONS = [
  {
    number: 1,
    title: 'El concepto de sistema',
    objective: 'Transitar de una visión fragmentada del cuerpo a una visión de totalidad interconectada.',
    lineamientos: [6],
    sims: [],
    activities: ['video', 'foro'],
  },
  {
    number: 2,
    title: 'Componentes y causalidad I',
    objective: 'Identificar las partes del corazón y la sangre, y sus relaciones de causa-efecto.',
    lineamientos: [1, 2],
    sims: ['corazon', 'sangre'],
    activities: ['simulacion', 'cuestionario'],
  },
  {
    number: 3,
    title: 'Componentes y causalidad II',
    objective: 'Identificar las partes de los pulmones y el cerebro, y su rol en el intercambio gaseoso y la regulación.',
    lineamientos: [1, 2],
    sims: ['pulmones', 'cerebro'],
    activities: ['simulacion', 'sintesis'],
  },
  {
    number: 4,
    title: 'Escalas y representación',
    objective: 'Cuantificar gasto cardíaco, presión y saturación, y representar el flujo sanguíneo en un diagrama.',
    lineamientos: [3, 4],
    sims: ['corazon', 'sangre', 'pulmones', 'cerebro'],
    activities: ['calculo', 'diagrama'],
  },
  {
    number: 5,
    title: 'Visión de totalidad',
    objective: 'Comprender la conservación, el propósito y la estabilidad del sistema circulatorio como un todo.',
    lineamientos: [5, 6, 7],
    sims: ['sistema-circulatorio'],
    activities: ['simulacion', 'informe'],
  },
  {
    number: 6,
    title: 'Homeostasis y resiliencia',
    objective: 'Analizar cómo el sistema responde y se autorregula ante perturbaciones (actividad física, estrés).',
    lineamientos: [7],
    sims: ['sistema-circulatorio'],
    activities: ['simulacion', 'analisis'],
  },
  {
    number: 7,
    title: 'Síntesis y cierre',
    objective: 'Integrar los aprendizajes y evaluar el nivel final de pensamiento sistémico.',
    lineamientos: [5, 6, 7],
    sims: [],
    activities: ['postest'],
  },
];

module.exports = SESSIONS;
