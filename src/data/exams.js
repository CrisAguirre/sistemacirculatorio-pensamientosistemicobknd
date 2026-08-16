// Banco de preguntas de evaluación por simulación.
// Cada pregunta: { id, text, options[], correctIndex, explanation }.
// El índice correcto se usa solo en el backend para calificar; no se envía al cliente.

const EXAMS = {
  corazon: {
    title: 'El Corazón',
    questions: [
      {
        id: 'corazon-1',
        text: '¿Cuál es la función principal del corazón dentro del sistema circulatorio?',
        options: [
          'Bombear la sangre para que circule por todo el cuerpo',
          'Producir glóbulos rojos',
          'Filtrar las toxinas de la sangre',
          'Almacenar oxígeno de reserva',
        ],
        correctIndex: 0,
        explanation: 'El corazón actúa como bomba que impulsa la sangre a través de los vasos sanguíneos.',
      },
      {
        id: 'corazon-2',
        text: '¿Cuántas cavidades tiene el corazón humano?',
        options: ['2', '3', '4', '6'],
        correctIndex: 2,
        explanation: 'Tiene 4 cavidades: dos aurículas (superiores) y dos ventrículos (inferiores).',
      },
      {
        id: 'corazon-3',
        text: 'Durante la sístole ventricular, el corazón…',
        options: [
          'Se relaja y se llena de sangre',
          'Se contrae y expulsa la sangre hacia las arterias',
          'Detiene el flujo sanguíneo por completo',
          'Solo late la aurícula derecha',
        ],
        correctIndex: 1,
        explanation: 'La sístole es la contracción: los ventrículos se contraen y envían sangre a las arterias.',
      },
      {
        id: 'corazon-4',
        text: 'Desde el enfoque sistémico, el corazón NO trabaja aislado porque…',
        options: [
          'Solo responde a órdenes del estómago',
          'Recibe señales del sistema nervioso y responde a la demanda de oxígeno del cuerpo',
          'Siempre late a la misma frecuencia sin importar la actividad',
          'Su ritmo lo controla únicamente la respiración',
        ],
        correctIndex: 1,
        explanation: 'El corazón es un subsistema que se adapta: el SNA y la demanda de oxígeno modifican frecuencia y fuerza.',
      },
      {
        id: 'corazon-5',
        text: 'Una frecuencia cardíaca de 140 lpm durante el ejercicio se explica porque…',
        options: [
          'El corazón se está dañando siempre',
          'Los músculos demandan más oxígeno y el sistema nervioso simpático acelera el corazón',
          'La sangre se vuelve más espesa',
          'Los pulmones dejan de funcionar',
        ],
        correctIndex: 1,
        explanation: 'Es una retroalimentación de demanda: más actividad muscular requiere más flujo sanguíneo.',
      },
    ],
  },

  sangre: {
    title: 'La Sangre',
    questions: [
      {
        id: 'sangre-1',
        text: '¿Cuál es el componente de la sangre encargado de transportar oxígeno?',
        options: ['Los glóbulos blancos', 'Las plaquetas', 'Los glóbulos rojos (eritrocitos)', 'El plasma'],
        correctIndex: 2,
        explanation: 'Los glóbulos rojos contienen hemoglobina, que se une al oxígeno para transportarlo.',
      },
      {
        id: 'sangre-2',
        text: '¿Qué función cumplen las plaquetas?',
        options: [
          'Defender el cuerpo de infecciones',
          'Participar en la coagulación de la sangre',
          'Transportar nutrientes',
          'Regular la temperatura corporal',
        ],
        correctIndex: 1,
        explanation: 'Las plaquetas intervienen en la coagulación para detener hemorragias.',
      },
      {
        id: 'sangre-3',
        text: 'El plasma es la parte líquida de la sangre y sirve para…',
        options: [
          'Transportar células, nutrientes, hormonas y desechos',
          'Contraer los músculos',
          'Oxigenar directamente los pulmones',
          'Producir plaquetas',
        ],
        correctIndex: 0,
        explanation: 'El plasma es el medio líquido que transporta células y sustancias por todo el cuerpo.',
      },
      {
        id: 'sangre-4',
        text: 'Los glóbulos blancos (leucocitos) cumplen la función de…',
        options: [
          'Transportar dióxido de carbono',
          'Defender el organismo contra infecciones',
          'Cerrar las heridas',
          'Dar color rojo a la sangre',
        ],
        correctIndex: 1,
        explanation: 'Los leucocitos son células de defensa del sistema inmunitario.',
      },
      {
        id: 'sangre-5',
        text: 'Pensando sistémicamente, la sangre es el componente que…',
        options: [
          'Genera la energía de todo el cuerpo',
          'Conecta todos los órganos transportando oxígeno, nutrientes y desechos',
          'Reemplaza la función del cerebro',
          'Solo circula dentro del corazón',
        ],
        correctIndex: 1,
        explanation: 'La sangre es el medio de conexión que integra todos los subsistemas del cuerpo.',
      },
    ],
  },

  pulmones: {
    title: 'Los Pulmones',
    questions: [
      {
        id: 'pulmones-1',
        text: '¿Qué gas incorpora la sangre al pasar por los pulmones?',
        options: ['Dióxido de carbono', 'Oxígeno', 'Nitrógeno puro', 'Hidrógeno'],
        correctIndex: 1,
        explanation: 'En los alvéolos la sangre capta oxígeno del aire inspirado.',
      },
      {
        id: 'pulmones-2',
        text: 'El intercambio gaseoso ocurre en…',
        options: ['Las cavidades del corazón', 'Los alvéolos pulmonares', 'Las arterias coronarias', 'El estómago'],
        correctIndex: 1,
        explanation: 'Los alvéolos son pequeños sacos donde el aire y la sangre intercambian gases.',
      },
      {
        id: 'pulmones-3',
        text: 'Durante el intercambio gaseoso, la sangre libera…',
        options: ['Oxígeno', 'Glucosa', 'Dióxido de carbono', 'Hemoglobina'],
        correctIndex: 2,
        explanation: 'La sangre entrega dióxido de carbono (desecho) para que sea exhalado.',
      },
      {
        id: 'pulmones-4',
        text: 'La circulación pulmonar (circulación menor) lleva la sangre…',
        options: [
          'Del corazón a los pulmones y de regreso al corazón',
          'Del corazón a todo el cuerpo',
          'De los pies a la cabeza',
          'Solo dentro del cerebro',
        ],
        correctIndex: 0,
        explanation: 'La circulación menor va del corazón a los pulmones para oxigenar la sangre.',
      },
      {
        id: 'pulmones-5',
        text: 'Desde el pensamiento sistémico, los pulmones son importantes porque…',
        options: [
          'Controlan el ritmo cardíaco directamente',
          'Permiten el intercambio de gases que sostiene la respiración celular de todo el cuerpo',
          'Producen los glóbulos rojos',
          'Regulan la temperatura corporal',
        ],
        correctIndex: 1,
        explanation: 'Los pulmones oxigenan la sangre, lo que permite a todas las células obtener energía.',
      },
    ],
  },

  cerebro: {
    title: 'El Cerebro',
    questions: [
      {
        id: 'cerebro-1',
        text: 'El cerebro demanda un alto porcentaje del flujo sanguíneo porque…',
        options: [
          'Es el órgano más grande del cuerpo',
          'Sus neuronas necesitan gran cantidad de oxígeno y glucosa constantemente',
          'Almacena la sangre como reserva',
          'No necesita mucha sangre en realidad',
        ],
        correctIndex: 1,
        explanation: 'El cerebro consume mucha energía y necesita un suministro constante de oxígeno y glucosa.',
      },
      {
        id: 'cerebro-2',
        text: 'El sistema nervioso autónomo (SNA) regula…',
        options: [
          'La digestión y nada más',
          'La frecuencia cardíaca y la presión arterial',
          'Solo los movimientos voluntarios',
          'La producción de glóbulos rojos',
        ],
        correctIndex: 1,
        explanation: 'El SNA (simpático y parasimpático) ajusta el corazón y la presión de forma automática.',
      },
      {
        id: 'cerebro-3',
        text: '¿Qué rama del SNA acelera el corazón ante una situación de peligro?',
        options: ['Parasimpático', 'Simpático', 'El cerebelo', 'Las plaquetas'],
        correctIndex: 1,
        explanation: 'El sistema simpático prepara el cuerpo para la acción acelerando el corazón.',
      },
      {
        id: 'cerebro-4',
        text: 'Los barorreceptores son sensores que…',
        options: [
          'Detectan cambios en la presión arterial e informan al cerebro',
          'Miden el oxígeno de los pulmones',
          'Controlan el sabor de los alimentos',
          'Regulan el azúcar de la sangre',
        ],
        correctIndex: 0,
        explanation: 'Los barorreceptores detectan la presión y permiten la retroalimentación correctora.',
      },
      {
        id: 'cerebro-5',
        text: 'El bucle "estímulo → cerebro → corazón → presión → cerebro" es un ejemplo de…',
        options: [
          'Un sistema lineal sin conexiones',
          'Retroalimentación (feedback) del pensamiento sistémico',
          'Una reacción química simple',
          'Un reflejo que no involucra al sistema nervioso',
        ],
        correctIndex: 1,
        explanation: 'Es un ciclo de retroalimentación donde la salida del sistema vuelve a influir en su entrada.',
      },
    ],
  },

  'sistema-circulatorio': {
    title: 'Sistema Circulatorio Completo',
    questions: [
      {
        id: 'sistema-1',
        text: 'El sistema circulatorio se compone principalmente de…',
        options: [
          'Corazón, vasos sanguíneos y sangre',
          'Solo el corazón y los pulmones',
          'Huesos y músculos',
          'Estómago e intestinos',
        ],
        correctIndex: 0,
        explanation: 'Corazón (bomba), vasos sanguíneos (conductos) y sangre (medio de transporte).',
      },
      {
        id: 'sistema-2',
        text: 'La circulación mayor (sistémica) lleva sangre…',
        options: [
          'Del corazón a todo el cuerpo y de regreso',
          'Solo a los pulmones',
          'Solo al cerebro',
          'Del estómago al corazón',
        ],
        correctIndex: 0,
        explanation: 'La circulación sistémica distribuye sangre oxigenada a todos los tejidos.',
      },
      {
        id: 'sistema-3',
        text: 'La sangre oxigenada regresa de los pulmones al corazón por…',
        options: ['Las venas cavas', 'Las venas pulmonares', 'La arteria aorta', 'Los capilares'],
        correctIndex: 1,
        explanation: 'Las venas pulmonares llevan la sangre oxigenada al corazón.',
      },
      {
        id: 'sistema-4',
        text: '¿Qué característica es propia de un "sistema" según el pensamiento sistémico?',
        options: [
          'Sus partes funcionan de forma independiente y sin relación',
          'Sus componentes interactúan y el todo es más que la suma de las partes',
          'Nunca cambia con el tiempo',
          'Carece de retroalimentación',
        ],
        correctIndex: 1,
        explanation: 'En un sistema, las interacciones entre partes generan propiedades emergentes.',
      },
      {
        id: 'sistema-5',
        text: 'Si una persona hace ejercicio, su sistema circulatorio responde…',
        options: [
          'Disminuyendo la frecuencia cardíaca y el flujo',
          'Aumentando la frecuencia cardíaca y el flujo para oxigenar los músculos',
          'Deteniendo la circulación pulmonar',
          'Sin ningún cambio',
        ],
        correctIndex: 1,
        explanation: 'El sistema se adapta como un todo: más demanda de oxígeno → más flujo sanguíneo.',
      },
    ],
  },
};

module.exports = EXAMS;
