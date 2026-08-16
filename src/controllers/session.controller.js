const SESSIONS = require('../data/sessions');
const Progress = require('../models/Progress');

async function list(req, res) {
  try {
    const progress = await Progress.findOne({ user: req.user.id });
    const completed = progress ? progress.completedSessions : [];

    const sessions = SESSIONS.map((s) => ({
      ...s,
      completed: completed.includes(s.number),
    }));

    res.json(sessions);
  } catch (error) {
    console.error('Error al listar sesiones:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = { list };
