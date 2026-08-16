const Exam = require('../models/Exam');
const EXAMS = require('../data/exams');

function toPublicQuestions(questions) {
  return questions.map(({ id, type, subtype, text, options, timeLimit }) => ({
    id,
    type,
    subtype,
    text,
    options,
    timeLimit,
  }));
}

function gradeQuestion(question, answer) {
  if (question.subtype === 'multiple') {
    const selected = Array.isArray(answer?.selected) ? answer.selected.slice().sort() : [];
    const correct = [...question.correctAnswers].sort();
    return JSON.stringify(selected) === JSON.stringify(correct);
  }
  return answer?.selected === question.correctAnswers[0];
}

function getBySimulation(req, res) {
  const bank = EXAMS[req.params.id];
  if (!bank) {
    return res.status(404).json({ error: 'No existe evaluación para esta simulación' });
  }

  res.json({
    simulationId: req.params.id,
    title: bank.title,
    questions: toPublicQuestions(bank.questions),
  });
}

async function submit(req, res) {
  try {
    const bank = EXAMS[req.params.id];
    if (!bank) {
      return res.status(404).json({ error: 'No existe evaluación para esta simulación' });
    }

    const { answers } = req.body;
    if (!Array.isArray(answers)) {
      return res.status(400).json({ error: 'Debe enviar un arreglo de respuestas' });
    }

    let score = 0;
    const total = bank.questions.length;
    const graded = bank.questions.map((question) => {
      const answer = answers.find((a) => a.questionId === question.id);
      const isCorrect = gradeQuestion(question, answer);
      if (isCorrect) score += 1;
      return {
        questionId: question.id,
        selected: answer?.selected ?? null,
        correct: question.correctAnswers,
        isCorrect,
      };
    });

    const exam = await Exam.create({
      user: req.user.id,
      simulationId: req.params.id,
      simulationTitle: bank.title,
      score,
      total,
      answers: graded,
    });

    res.status(201).json({
      id: exam._id,
      simulationId: exam.simulationId,
      simulationTitle: exam.simulationTitle,
      score,
      total,
      answers: graded,
    });
  } catch (error) {
    console.error('Error al enviar evaluación:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function getMine(req, res) {
  try {
    const exams = await Exam.find({ user: req.user.id }).sort({ created_at: -1 });
    res.json(exams);
  } catch (error) {
    console.error('Error al obtener evaluaciones:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = { getBySimulation, submit, getMine };
