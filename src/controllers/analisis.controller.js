const Analisis = require('../models/Analisis');

async function create(req, res) {
  try {
    const { session, tipoAnalisis, descripcion, metricas } = req.body;
    if (!descripcion) {
      return res.status(400).json({ error: 'La descripción es obligatoria' });
    }

    const analisis = await Analisis.create({
      user: req.user.id,
      session: session || null,
      tipoAnalisis: tipoAnalisis || 'Cualitativo',
      descripcion,
      metricas: metricas || {},
    });

    res.status(201).json(analisis);
  } catch (error) {
    console.error('Error al guardar análisis:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function listMine(req, res) {
  try {
    const analisis = await Analisis.find({ user: req.user.id }).sort({ created_at: -1 });
    res.json(analisis);
  } catch (error) {
    console.error('Error al listar análisis:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = { create, listMine };
