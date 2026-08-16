const SIMULATIONS = require('../data/simulations');

function list(req, res) {
  res.json(SIMULATIONS);
}

function getById(req, res) {
  const simulation = SIMULATIONS.find((s) => s.id === req.params.id);
  if (!simulation) {
    return res.status(404).json({ error: 'Simulación no encontrada' });
  }
  res.json(simulation);
}

module.exports = { list, getById };
