const Progress = require('../models/Progress');

async function getMine(req, res) {
  try {
    let progress = await Progress.findOne({ user: req.user.id });

    if (!progress) {
      progress = await Progress.create({
        user: req.user.id,
        completedSimulations: [],
        currentSimulationId: null,
        scores: {},
        data: {},
      });
    }

    res.json(progress);
  } catch (error) {
    console.error('Error al obtener progreso:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function save(req, res) {
  try {
    const { completedSimulation, currentSimulationId, simulationId, score, data } = req.body;

    let progress = await Progress.findOne({ user: req.user.id });
    if (!progress) {
      progress = new Progress({ user: req.user.id });
    }

    if (completedSimulation && !progress.completedSimulations.includes(completedSimulation)) {
      progress.completedSimulations.push(completedSimulation);
    }

    if (currentSimulationId !== undefined) {
      progress.currentSimulationId = currentSimulationId;
    }

    if (simulationId && typeof score === 'number') {
      progress.scores.set(simulationId, score);
    }

    if (data !== undefined) {
      progress.data = data;
    }

    progress.lastSavedAt = Date.now();
    await progress.save();

    res.json(progress);
  } catch (error) {
    console.error('Error al guardar progreso:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = { getMine, save };
