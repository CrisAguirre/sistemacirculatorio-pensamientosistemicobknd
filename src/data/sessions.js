// Secuencia didáctica (7 sesiones) — pensamiento sistémico aplicado al sistema circulatorio.
// Lineamientos (Dr. Eliécer Pineda Ballesteros, UDES):
//   1 Componentes, 2 Causalidad, 3 Escalas, 4 Representación,
//   5 Conservación/Balance, 6 Propósito, 7 Estabilidad/Resiliencia.

const SESSIONS = [
  {
    number: 1,
    title: 'Introducción al concepto de sistema',
    objective: 'Módulo introductorio sobre pensamiento sistémico y la secuencia didáctica.',
    lineamientos: [],
    sims: ['introduccion'],
    activities: ['video', 'foro'],
  },
  {
    number: 2,
    title: 'Componentes y Causalidad en la Sangre',
    objective: 'Aplicación de Lineamientos 1 (Componentes) y 2 (Causalidad) en el tejido sanguíneo.',
    lineamientos: [1, 2],
    sims: ['sangre'],
    activities: ['simulacion', 'analisis'],
  },
  {
    number: 3,
    title: 'Componentes y Causalidad en el Cerebro',
    objective: 'Aplicación de Lineamientos 1 (Componentes) y 2 (Causalidad) en el centro de control cerebral.',
    lineamientos: [1, 2],
    sims: ['cerebro'],
    activities: ['simulacion', 'cuestionario'],
  },
  {
    number: 4,
    title: 'Representación y Escalas del Corazón',
    objective: 'Aplicación de Lineamientos 3 (Representación) y 4 (Escalas/Proporciones) en la bomba central.',
    lineamientos: [3, 4],
    sims: ['corazon'],
    activities: ['simulacion', 'sintesis'],
  },
  {
    number: 5,
    title: 'Representación y Escalas de los Pulmones',
    objective: 'Aplicación de Lineamientos 3 (Representación) y 4 (Escalas/Proporciones) en el intercambio gaseoso.',
    lineamientos: [3, 4],
    sims: ['pulmones'],
    activities: ['simulacion', 'calculo'],
  },
  {
    number: 6,
    title: 'Visión de Totalidad',
    objective: 'Aplicación de Lineamientos 5 (Conservación), 6 (Propósito) y 7 (Estabilidad) en el sistema circulatorio completo.',
    lineamientos: [5, 6, 7],
    sims: ['sistema-circulatorio'],
    activities: ['postest'],
  },
];

module.exports = SESSIONS;
