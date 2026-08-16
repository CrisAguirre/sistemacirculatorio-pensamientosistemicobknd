const InteractionLog = require('../models/InteractionLog');

async function create(req, res) {
  try {
    const { simulationId, session, variable, value } = req.body;
    if (!simulationId || !variable) {
      return res.status(400).json({ error: 'simulationId y variable son obligatorios' });
    }

    const log = await InteractionLog.create({
      user: req.user.id,
      simulationId,
      session: session || null,
      variable,
      value,
    });

    res.status(201).json(log);
  } catch (error) {
    console.error('Error al registrar interacción:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function listMine(req, res) {
  try {
    const logs = await InteractionLog.find({ user: req.user.id }).sort({ created_at: -1 }).limit(500);
    res.json(logs);
  } catch (error) {
    console.error('Error al listar logs:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = { create, listMine };
